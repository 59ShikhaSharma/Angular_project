// import { Injectable } from '@angular/core';
// import { BehaviorSubject } from 'rxjs';
// import { productDetails } from './interface/product-interface';

// @Injectable({
//   providedIn: 'root'
// })
// export class CartService {
//   private cartItemsSubject = new BehaviorSubject<productDetails[]>([]);
//   cartItems$ = this.cartItemsSubject.asObservable();

//   constructor() {}

//   addToCart(item: productDetails) {
//     const currentItems = this.cartItemsSubject.getValue();
//     const updatedItems = [...currentItems, item];
//     this.cartItemsSubject.next(updatedItems);
//   }

//   getCartItems(): productDetails[] {
//     return this.cartItemsSubject.getValue();
//   }
// }

import { Injectable } from '@angular/core';
import { productDetails } from './interface/product-interface';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartItems: productDetails[] = [];

  constructor() {}

  addToCart(item: productDetails) {
    this.cartItems.push(item);
  }

  getCartItems(): productDetails[] {
    return [...this.cartItems]; // Return a copy of the array to prevent direct modification
  }
}
