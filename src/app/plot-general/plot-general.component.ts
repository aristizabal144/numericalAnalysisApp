import { Component, OnInit } from '@angular/core';

declare const showFunction:any;

@Component({
  selector: 'app-plot-general',
  templateUrl: './plot-general.component.html',
  styleUrls: ['./plot-general.component.scss']
})
export class PlotGeneralComponent implements OnInit {

  public functions = ["x"];
  public functionsG = ["x"];
  public errors = "";

  constructor() { }

  ngOnInit(): void {
    showFunction(this.functions);
  }

  onKeyFunction(event: any, index: number){
    this.functions[index] = this.functionsG[index];
    try{
      showFunction(this.functions);
      this.errors = "";
    }catch{
      this.errors = "unrecognized function";
      this.functions[index] = "x"
    }
    
  }

  addFunction(){
    this.functions.push("x");
    this.functionsG.push("x");
  }

}
