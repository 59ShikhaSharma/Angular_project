import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FormDataService {
  updatedProductData: any
  productId: number = -1;
  datausers: any[] = [];
  constructor() { }
  
  form(demo: any) {
    this.datausers.push(demo);
    console.log("service :", this.datausers)
  }

  storeUpdatedData(updatedProduct: any, UproductId: number) {
    this.updatedProductData = updatedProduct;
    this.productId = UproductId;
  }
}
