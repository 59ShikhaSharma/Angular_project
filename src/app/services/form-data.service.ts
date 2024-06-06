import { Injectable } from '@angular/core';
import { IproductDetails } from '../interface/product-interface';

@Injectable({
  providedIn: 'root'
})
export class FormDataService {
  updatedProductData: IproductDetails | undefined;
  productId: number = -1;
  productdata: IproductDetails[] = [];
  constructor() { }

  createform(values: any) {
    this.productdata.push(values);
    console.log("service :", this.productdata)
  }

  storeUpdatedData(updatedProduct: IproductDetails, UproductId: number) {
    this.updatedProductData = updatedProduct;
    this.productId = UproductId;
  }
}
