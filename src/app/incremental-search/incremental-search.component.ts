import { Component, OnInit } from '@angular/core';
import {ServiceDataService} from '../service-data.service'

declare const showFunction:any;

@Component({
  selector: 'app-incremental-search',
  templateUrl: './incremental-search.component.html',
  styleUrls: ['./incremental-search.component.scss']
})
export class IncrementalSearchComponent implements OnInit {

  public method = {
    start : 0,
    step : 0,
    end : 0,
    f : ""
  }
  public errors = "";
  public results : [];

  constructor(public request : ServiceDataService) 
  {}

  ngOnInit(): void {
    showFunction("x");
  }

  onKeyFunction(event: any){
    try{
      showFunction(event.target.value);
      this.errors = "";
    }catch{
      this.errors = "unrecognized function";
      showFunction("x");
    }
  }

  getResults(){
    this.request.getJson("incSearch", {start: Number(this.method.start), step: Number(this.method.step), end: Number(this.method.end), f: this.method.f}).subscribe((res: any) => {
      if(res.error){
        this.errors = res.source;
      }else{
        this.errors = "";
        this.results = res.method.iters;
        console.log(res.error)
      }
    });
    
  }

}
