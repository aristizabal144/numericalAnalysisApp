import { Component, OnInit } from '@angular/core';
import {ServiceDataService} from "../service-data.service";

declare const showFunction:any;

@Component({
  selector: 'app-spline-cuad',
  templateUrl: './spline-cuad.component.html',
  styleUrls: ['./spline-cuad.component.css']
})

export class SplineCuadComponent implements OnInit {

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
  public polynoms = []
  strMatrixA = "";
  strMatrixB = "";

  constructor(public request : ServiceDataService) {

  }

  ngOnInit(): void {
    showFunction(this.functions);
    this.function = localStorage.getItem('function');
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

    let saveMatrixA = JSON.parse(localStorage.getItem('vectorx'));
    let saveMatrixB = JSON.parse(localStorage.getItem('vectory'));

    for (let i = 0; i < saveMatrixA.length; i++) {

      this.matrix_A[i]= saveMatrixA[i];
      this.matrix_B[i]= saveMatrixB[i];

    }
  }

  getResults(){
    this.strMatrixA = ""
    this.strMatrixB = ""
    //MATRIX A TO STRING
    this.strMatrixA += "[";
    this.strMatrixA += this.matrix_A.toString();
    this.strMatrixA += "]";

    //MATRIX B TO STRING
    this.strMatrixB += "[";
    this.strMatrixB += this.matrix_B.toString();
    this.strMatrixB += "]";

    localStorage.setItem('vectorx',this.strMatrixA);
    localStorage.setItem('vectory',this.strMatrixB);

    localStorage.setItem('function',this.functions[0]);
    this.request.getJson("cuadraSpline", {x: this.strMatrixA, y: this.strMatrixB}).subscribe((res: any) => {
      if(res.error){
        this.errors = res.source;
        this.polynoms = null;
        this.functions = null;
        setTimeout(_=>{
          this.errors = ""
        },6000)
      }else{
        this.errors = "";
        this.functions.push(...res.polynoms)
        this.polynoms = res.polynoms
        this.onKeyFunctionF("1");
      }
    });

  }
}
