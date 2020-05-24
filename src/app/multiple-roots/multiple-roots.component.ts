import { Component, OnInit } from '@angular/core';

declare const showFunction:any;

@Component({
  selector: 'app-multiple-roots',
  templateUrl: './multiple-roots.component.html',
  styleUrls: ['./multiple-roots.component.scss']
})
export class MultipleRootsComponent implements OnInit {

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
