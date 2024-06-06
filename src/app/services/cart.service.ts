import { Injectable } from '@angular/core';
import { IproductDetails } from '../interface/product-interface';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartItems: IproductDetails[] = [];

  constructor() { }

  addToCart(product: IproductDetails) {
    const existingItem = this.cartItems.find(item => item.id === product.id);
    if (existingItem) {
      existingItem.quantity += 1;
    } else if (!existingItem) {
      this.cartItems.push(product);
    }
    else {
      window.alert("Out of stock !!! ")
    }
  }

  getCartItems(): IproductDetails[] {
    return [...this.cartItems];
  }
}
