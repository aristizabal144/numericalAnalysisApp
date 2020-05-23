import { Component, OnInit } from '@angular/core';

declare const showFunction:any;

@Component({
  selector: 'app-incremental-search',
  templateUrl: './incremental-search.component.html',
  styleUrls: ['./incremental-search.component.scss']
})
export class IncrementalSearchComponent implements OnInit {

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
