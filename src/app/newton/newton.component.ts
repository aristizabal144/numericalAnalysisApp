import { Component, OnInit } from '@angular/core';
declare const showFunction:any;


@Component({
  selector: 'app-newton',
  templateUrl: './newton.component.html',
  styleUrls: ['./newton.component.scss']
})
export class NewtonComponent implements OnInit {

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
