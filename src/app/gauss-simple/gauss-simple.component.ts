import { Component, OnInit } from '@angular/core';
import { ServiceDataService } from '../service-data.service';
declare const showFunction:any;

@Component({
  selector: 'app-gauss-simple',
  templateUrl: './gauss-simple.component.html',
  styleUrls: ['./gauss-simple.component.scss']
})
export class GaussSimpleComponent implements OnInit {

  public errors  = "";
  public size;
  public cont = [];
  public matrix_A = [];
  public matrix_B = [];
  public values = [];

  private strMatrixA = "";
  private strMatrixB = "";

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

  generateMatrix(){

    this.cont = [];
    this.matrix_A = [];
    this.matrix_B = [];

    for (let index = 0; index < this.size; index++) {
      let aux = [];
      for (let index = 0; index < this.size; index++) {
        aux.push("");
      }
      this.matrix_A.push(aux);
      this.cont.push(index);
      this.matrix_B.push("");
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

    this.matrixToString();

    localStorage.setItem('matrixa', this.strMatrixA);
    localStorage.setItem('matrixb', this.strMatrixB);

    this.request.getJson("gaussSimple", {a: this.strMatrixA, b: this.strMatrixB}).subscribe((res: any) => {
      if(res.error){
        this.errors = res.source;
        setTimeout(_=>{
          this.errors = ""
        },6000)
        this.values = []
      }else{
        this.errors = "";
        this.values = res;

        this.values['pivots'].map(element => {
          element["matrix"] = this.stringToMatrix(element["matrix"]);
        });

      }
    });

  }

  printTest(){
    console.log(this.values);
  }
}
