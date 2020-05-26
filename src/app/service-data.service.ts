import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ServiceDataService {

  URL :string  = "https://numericalanalysisback.herokuapp.com/";

  constructor(private http : HttpClient) { }

  getJson(method : string, data : any){
    let CompleteURL = this.URL+method;
    return this.http.post(CompleteURL, data);
  }
}
