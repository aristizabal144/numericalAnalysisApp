import { Component, OnInit } from '@angular/core';

declare const showFunction:any;

@Component({
  selector: 'app-secant',
  templateUrl: './secant.component.html',
  styleUrls: ['./secant.component.scss']
})
export class SecantComponent implements OnInit {

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
