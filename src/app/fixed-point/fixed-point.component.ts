import { Component, OnInit } from '@angular/core';
import {ServiceDataService} from '../service-data.service'

declare const showFunction:any;

@Component({
  selector: 'app-fixed-point',
  templateUrl: './fixed-point.component.html',
  styleUrls: ['./fixed-point.component.scss']
})
export class FixedPointComponent implements OnInit {

  public method = {
    a : 0,
    tol : 0,
    iters : 0,
    f : "" ,
    g : ""
  }


  public errors = "";
  public results : [];
  public functions = ["x"];

  constructor(public request : ServiceDataService) {

  }

  ngOnInit(): void {
    showFunction(this.functions);
  }
  tol(){
    if(this.method.tol < 0) this.errors = "Tolerance must be positive"
    else this.errors = ""
  }

  iters(){
    if(this.method.iters < 1) this.errors = "Iters must be > 0"
    else this.errors = ""
  }
  onKeyFunction(event: any){
    try{
      this.functions[0] = this.method.f;
      showFunction(this.functions);
      this.errors = "";
    }catch{
      this.errors = "unrecognized function";
      showFunction("x");
    }

  }
  getResults(){
    this.request.getJson("fixedPoint", {a: Number(this.method.a), tol: Number(this.method.tol), iters: Number(this.method.iters), f: this.method.f, g: this.method.g}).subscribe((res: any) => {
      if(res.error){
        this.errors = res.source;
        this.results = null;
        if(res.method.iters){
          this.results = res.method.iters;
        }
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
