import { Component, OnInit } from '@angular/core';
import {ServiceDataService} from "../service-data.service";

declare const showFunction:any;

@Component({
  selector: 'app-multiple-roots',
  templateUrl: './multiple-roots.component.html',
  styleUrls: ['./multiple-roots.component.scss']
})
export class MultipleRootsComponent implements OnInit {

  public method = {
    a : 0,
    tol : 0,
    iters : 0,
    f : "",
    df : "",
    ddf : ""
  }
  public errors = "";
  public results : [];
  public functions = ["x"];

  constructor(public request : ServiceDataService) {

  }

  ngOnInit(): void {
    showFunction(this.functions);
  }

  onKeyFunctionF(event: any){
    try{
      this.functions[0] = this.method.f;
      showFunction(this.functions);
      this.errors = "";
    }catch{
      this.errors = "unrecognized function";
      showFunction("x");
    }
  }

  onKeyFunctiondF(event: any){
    try{
      this.functions[1] = this.method.df;
      showFunction(this.functions);
      this.errors = "";
    }catch{
      this.errors = "unrecognized function";
      showFunction("x");
    }
  }

  onKeyFunctionddF(event: any){
    try{
      this.functions[2] = this.method.ddf;
      showFunction(this.functions);
      this.errors = "";
    }catch{
      this.errors = "unrecognized function";
      showFunction("x");
    }
  }

  getResults(){
    this.request.getJson("multipleRoots", {
      a: Number(this.method.a),
      tol: Number(this.method.tol),
      iters: Number(this.method.iters),
      f: this.method.f,
      df: this.method.df,
      ddf: this.method.ddf
    }).subscribe((res: any) => {
      if(res.error){
        this.errors = res.source;
        this.results = null;
        setTimeout(_=>{
          this.errors = ""
        },6000)
      }else{
        this.errors = "";
        this.results = res.method.iters;
        console.log(res.error)
      }
    });

  }
}
