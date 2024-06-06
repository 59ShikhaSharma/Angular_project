import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FormDataService {
  updatedProductData: any;
  productId: number = -1;
  productdata: any[] = [];
  constructor() { }

  createform(values: any) {
    this.productdata.push(values);
    console.log("service :", this.productdata)
  }

  storeUpdatedData(updatedProduct: any, UproductId: number) {
    this.updatedProductData = updatedProduct;
    this.productId = UproductId;
  }

}
