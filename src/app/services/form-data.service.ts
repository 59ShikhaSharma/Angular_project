import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class FormDataService {

  constructor() { }
  datausers:any[]=[];
  form(demo:any) {
    this.datausers.push(demo);
    console.log("service :" ,this.datausers)
  }
  
}
