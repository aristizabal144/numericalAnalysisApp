import { Component, OnInit } from '@angular/core';
import { ServiceDataService } from '../service-data.service';

declare const showFunction:any;

@Component({
  selector: 'app-false-rule',
  templateUrl: './false-rule.component.html',
  styleUrls: ['./false-rule.component.scss']
})
export class FalseRuleComponent implements OnInit {

  public method = {
    a : 0,
    b : 0,
    tol: 0,
    iters : 0,
    f : ""
  }

  public errors = "";
  public results : [];
  public functions = ["x"];

  constructor(public request : ServiceDataService)
  {}

  ngOnInit(): void {
    showFunction(this.functions);
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
    this.request.getJson("falseRule",{
      a: Number(this.method.a),
      b: Number(this.method.b),
      tol: Number(this.method.tol),
      iters: Number(this.method.iters),
      f: this.method.f
    }).subscribe((res: any) => {
      if(res.error){
        this.errors = res.source;
        this.results = null;
        setTimeout(_=>{
          this.errors = ""
        },2000)
      }else{
        this.errors = "";
        this.results = res.method.iters;
        console.log(res.error)
      }
    });

  }
}
