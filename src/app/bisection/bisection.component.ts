import { Component, OnInit } from '@angular/core';

declare const showFunction:any;

@Component({
  selector: 'app-bisection',
  templateUrl: './bisection.component.html',
  styleUrls: ['./bisection.component.scss']
})
export class BisectionComponent implements OnInit {

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
