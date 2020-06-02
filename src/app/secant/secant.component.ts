import { Component, OnInit } from '@angular/core';
import {ServiceDataService} from '../service-data.service'

declare const showFunction:any;

@Component({
  selector: 'app-secant',
  templateUrl: './secant.component.html',
  styleUrls: ['./secant.component.scss']
})
export class SecantComponent implements OnInit {
  public method = {
    a : 0,
    b : 0,
    tol : 0,
    iters : 0,
    f : ""
  }
  public errors = "";
  public results : [];
  public functions = ["x"];

  constructor(public request : ServiceDataService) {

  }

  ngOnInit(): void {
    showFunction(this.functions);
    this.method.f = localStorage.getItem('f');
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
    localStorage.setItem('f',this.functions[0]);
    this.request.getJson("secant", {a: Number(this.method.a), b: Number(this.method.b), tol: Number(this.method.tol), iters: Number(this.method.iters), f: this.method.f}).subscribe((res: any) => {
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


