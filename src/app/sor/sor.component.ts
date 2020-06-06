import { Component, OnInit } from '@angular/core';
import { ServiceDataService } from '../service-data.service';
declare const showFunction:any;

@Component({
  selector: 'app-sor',
  templateUrl: './sor.component.html',
  styleUrls: ['./sor.component.scss']
})
export class SorComponent implements OnInit {

  public method = {
    tol : 0,
    iters : 0,
    w: 0
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

  matrixA(){
    let pending = false;
    for(let i = 0; i < this.matrix_A.length; i++){
      if(this.matrix_A[i].includes("")) pending = true
    }
    if(pending) this.errors = "Matrix A must be fullfilled"
    else this.errors = ""
  }

  vectorB(){
    if(this.matrix_B.includes("")) this.errors = "Vector B must be fullfilled"
    else this.errors = ""
  }

  vectorX(){
    if(this.matrix_X.includes("")) this.errors = "Vector X must be fullfilled"
    else this.errors = ""
  }

  tol(){
    if(this.method.tol < 0) this.errors = "Tolerance must be positive"
    else this.errors = ""
  }

  iters(){
    if(this.method.iters < 1) this.errors = "Iters must be > 0"
    else this.errors = ""
  }

  w(){
    if(this.method.w < 0 || this.method.w > 2) this.errors = "w must be between 0 and 2"
    else this.errors = ""
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

    let saveMatrixA = JSON.parse(localStorage.getItem('matrixa'));
    let saveMatrixB = JSON.parse(localStorage.getItem('matrixb'));

    for (let i = 0; i < saveMatrixA.length; i++) {
      for (let j = 0; j < saveMatrixA.length; j++) {
        this.matrix_A[i][j]= saveMatrixA[i][j];

      }
      this.matrix_B[i]= saveMatrixB[i];
    }
  }

  matrixToString(){
    this.strMatrixA = ""
    this.strMatrixB = ""
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

    localStorage.setItem('matrixa', this.strMatrixA);
    localStorage.setItem('matrixb', this.strMatrixB);

    this.request.getJson("sor", {a: this.strMatrixA, b: this.strMatrixB, x: this.strMatrixX, tol: Number(this.method.tol), iters: Number(this.method.iters), w: Number(this.method.w)}).subscribe((res: any) => {
      if(res.error){
        this.errors = res.source;
      }else{
        this.errors = "";
        this.results = res;

        this.results['CMatrix'] = this.stringToMatrix(this.results['CMatrix']);

        this.results['TMatrix'] = this.stringToMatrix(this.results['TMatrix']);

        console.log(this.results);

      }
    });

  }

  printTest(){
    console.log(this.results);
  }
}
