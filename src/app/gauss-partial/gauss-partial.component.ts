import { Component, OnInit } from '@angular/core';
import { ServiceDataService } from '../service-data.service';
declare const showFunction:any;

@Component({
  selector: 'app-gauss-partial',
  templateUrl: './gauss-partial.component.html',
  styleUrls: ['./gauss-partial.component.scss']
})
export class GaussPartialComponent implements OnInit {

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

    this.request.getJson("gaussPartial", {a: this.strMatrixA, b: this.strMatrixB}).subscribe((res: any) => {
      if(res.error){
        this.errors = res.source;
        this.values = null;
        setTimeout(_=>{
          this.errors = ""
        },2000)
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
