import { Component, OnInit } from '@angular/core';
import { ServiceDataService } from '../service-data.service';
declare const showFunction:any;


@Component({
  selector: 'app-newton',
  templateUrl: './newton.component.html',
  styleUrls: ['./newton.component.scss']
})
export class NewtonComponent implements OnInit {

  public method = {
    a : 0,
    tol : 0,
    iters : 0,
    f : "",
    df : ""
  }

  errors = "";
  public results : [];
  public functions = ["x","x"];

  constructor(public request : ServiceDataService) {

  }

  ngOnInit(): void {
    showFunction(this.functions);
  }

  onKeyFunctionf(event: any){
    try{
      this.functions[0] = this.method.f;
      showFunction(this.functions);
      this.errors = "";
    }catch{
      this.errors = "unrecognized function";
      showFunction("x");
    }

  }

  onKeyFunctiondf(event: any){
    try{
      this.functions[1] = this.method.df;
      showFunction(this.functions);
      this.errors = "";
    }catch{
      this.errors = "unrecognized function";
      showFunction("x");
    }

  }

  getResults(){
    this.request.getJson("newton", {a: Number(this.method.a), tol: Number(this.method.tol), iters: Number(this.method.iters), f: this.method.f, df: this.method.df}).subscribe((res: any) => {
      if(res.error){
        this.errors = res.source;
        this.results = null;
        setTimeout(_=>{
          this.errors = ""
        },2000)
      }else{
        this.errors = "";
        this.results = res.method.iters;
      }
    });

  }
}
