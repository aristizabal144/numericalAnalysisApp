import { Component, OnInit } from '@angular/core';
import { ServiceDataService } from '../service-data.service';
declare const showFunction:any;

@Component({
  selector: 'app-lu-pivot',
  templateUrl: './lu-pivot.component.html',
  styleUrls: ['./lu-pivot.component.scss']
})
export class LuPivotComponent implements OnInit {

  public errors  = "";
  public size;
  public cont = [];
  public matrix_A = [];
  public matrix_B = [];

  strMatrixA = "";
  strMatrixB = "";

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

  

  getResults(){

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

    this.request.getJson("luPivot", {a: this.strMatrixA, b: this.strMatrixB}).subscribe((res: any) => {
      if(res.error){
        this.errors = res.source;
      }else{
        this.errors = "";
        
      }
    });
    

    let str = "[[2,3,4,4],[2,3,4,1]]";
    let arr = str.split("],[");
    const regex = /[\[|\]]/g;
    arr = arr.map( val => val.replace(regex,""));
    let vector = arr.map( val => val.split(","));

    console.log(vector);
    
  }

}

