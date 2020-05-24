import { Component, OnInit } from '@angular/core';
declare const showFunction:any;

@Component({
  selector: 'app-fixed-point',
  templateUrl: './fixed-point.component.html',
  styleUrls: ['./fixed-point.component.scss']
})
export class FixedPointComponent implements OnInit {

  errors = "";

  constructor() { 
    
  }

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
}
