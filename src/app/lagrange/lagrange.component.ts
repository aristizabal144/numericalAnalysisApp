import { Component, OnInit } from '@angular/core';
import {ServiceDataService} from "../service-data.service";

declare const showFunction:any;

@Component({
  selector: 'app-lagrange',
  templateUrl: './lagrange.component.html',
  styleUrls: ['./lagrange.component.scss']
})

export class LagrangeComponent implements OnInit {

  public method = {
    x: "",
    y: ""
  }
  public results : [];
  public functions = ["x"];
  public function = "x"
  public errors  = "";
  public size;
  public cont = [];
  public matrix_A = [];
  public matrix_B = [];
  public polynoms : any = []
  strMatrixA = "";
  strMatrixB = "";

  constructor(public request : ServiceDataService) {

  }

  ngOnInit(): void {
    showFunction(this.functions);
  }

  onKeyFunctionF(event: any){
    try{
      this.functions[0] = this.function
      showFunction(this.functions);
      this.errors = "";
    }catch{
      this.errors = "unrecognized function";
      showFunction("x");
    }
  }

  generateMatrix(){

    this.cont = [];
    this.matrix_A = [];
    this.matrix_B = [];

    for (let index = 0; index < this.size; index++) {
      this.matrix_A.push("");
      this.cont.push(index);
      this.matrix_B.push("");
    }

  }

  getResults(){

    //MATRIX A TO STRING

    this.strMatrixA += "[";
    this.strMatrixA += this.matrix_A.toString();
    this.strMatrixA += "]";

    //MATRIX B TO STRING
    this.strMatrixB += "[";
    this.strMatrixB += this.matrix_B.toString();
    this.strMatrixB += "]";

    this.request.getJson("vandermonde", {x: this.strMatrixA, y: this.strMatrixB}).subscribe((res: any) => {
      if(res.error){
        this.errors = res.source;
        this.function = "x";
        this.polynoms = null;
        setTimeout(_=>{
          this.errors = ""
        },2000)
      }else{
        this.errors = "";
        this.function = res.result;
        this.polynoms = this.polynoms = res.L
        this.onKeyFunctionF("1");
      }
    });

  }
}
