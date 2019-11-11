import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class StateService {
  private token;
  public data;


  setData(data: any) {

    this.token = data[0].id;
    this.data = data;
    console.log(this.data);
    localStorage.setItem("Data", JSON.stringify(data));
  }

  getToken(): string {
    return this.token;
  }
  constructor( public router: Router,
    public httpClient: HttpClient) {
     console.log("Checking local storage");
     console.log(localStorage.getItem("Data"));
     const obj = JSON.parse(localStorage.getItem("Data"));
      console.log(obj);
     if (obj != null) {
       this.token = obj[0].id;
       this.data = obj;
     }
     // const queryFilter = JSON.parse(localStorage.getItem("queryF"));
     // this.queryFiltersData = queryFilter;
   }
   logout() {
    localStorage.clear();
    this.data = null;
    this.router.navigate(["/login"]);
  }
}
