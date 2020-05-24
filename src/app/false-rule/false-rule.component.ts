import { Component, OnInit } from '@angular/core';

declare const showFunction:any;

@Component({
  selector: 'app-false-rule',
  templateUrl: './false-rule.component.html',
  styleUrls: ['./false-rule.component.scss']
})
export class FalseRuleComponent implements OnInit {

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
