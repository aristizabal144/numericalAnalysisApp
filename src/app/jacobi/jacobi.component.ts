import { Component, OnInit } from '@angular/core';
import { ServiceDataService } from '../service-data.service';
declare const showFunction:any;

@Component({
  selector: 'app-jacobi',
  templateUrl: './jacobi.component.html',
  styleUrls: ['./jacobi.component.scss']
})
export class JacobiComponent implements OnInit {

  public method = {
    tol : 0,
    iters : 0,
  }

  public errors  = "";
  public size;
  public cont = [];
  public matrix_A = [];
  public matrix_B = [];
  public matrix_X = [];
  public results = [];

  private strMatrixA = "";
  private strMatrixB = "";
  private strMatrixX = "";

  constructor(public request : ServiceDataService) { 
    
  }

  ngOnInit(): void {
    
  }


  generateMatrix(){

    this.cont = [];
    this.matrix_A = [];
    this.matrix_B = [];
    this.matrix_X = [];
    
    for (let index = 0; index < this.size; index++) {
      let aux = [];
      for (let index = 0; index < this.size; index++) {
        aux.push("");
      }
      this.matrix_A.push(aux);
      this.cont.push(index);
      this.matrix_B.push("");
      this.matrix_X.push("");
    }
  }

  matrixToString(){
    //MATRIX A TO STRING
    this.strMatrixA += "["

    let sizeA = this.matrix_A.length;
    let i = 0;

    this.matrix_A.forEach(element => {
      i++;
      this.strMatrixA += "["
      this.strMatrixA += element.toString();

      if(i == sizeA){
        this.strMatrixA += "]";
      }else{
        this.strMatrixA += "],";
      }
    });
    this.strMatrixA += "]";

    //MATRIX B TO STRING
    this.strMatrixB += "[";
    this.strMatrixB += this.matrix_B.toString();
    this.strMatrixB += "]";

    //MATRIX X TO STRING
    this.strMatrixX += "[";
    this.strMatrixX += this.matrix_X.toString();
    this.strMatrixX += "]";
  }

  stringToMatrix(value : String){
    let str = value.replace(/\s+/g, '');
    let arr = str.split("],[");
    const regex = /[\[|\]]/g;
    arr = arr.map( val => val.replace(regex,""));
    let vector = arr.map( val => val.split(","));

    return vector;
  }
  

  getResults(){

    this.strMatrixA = "";
    this.strMatrixB = "";
    this.strMatrixX = "";

    this.matrixToString();

    this.request.getJson("jacobi", {a: this.strMatrixA, b: this.strMatrixB, x: this.strMatrixX, tol: Number(this.method.tol), iters: Number(this.method.iters)}).subscribe((res: any) => {
      if(res.error){
        this.errors = res.source;
      }else{
        this.errors = "";
        this.results = res;
        
        this.results['cmatrix'] = this.stringToMatrix(this.results['cmatrix']);

        this.results['tmatrix'] = this.stringToMatrix(this.results['tmatrix']);
        
        console.log(this.results);
        
      }
    });
    
  }

  printTest(){
    console.log(this.results);
  }
}
