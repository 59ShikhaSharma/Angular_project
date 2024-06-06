import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';
import { IproductDetails } from '../interface/product-interface';

@Component({
  selector: 'cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartItems: IproductDetails[] = [];
  totalPrice: number = 0;
  constructor(private cartService: CartService) { }

  ngOnInit() {
    this.cartItems = this.cartService.getCartItems();
    console.log(this.cartItems);
    this.calculateTotalPrice();
  }

  increaseQuantity(item: IproductDetails) {
    item.quantity++;
    this.calculateTotalPrice();
  }

  decreaseQuantity(item: IproductDetails) {
    if (item.quantity > 0) {
      item.quantity--;
      if (item.quantity === 0) {
        this.removeFromCart(item);
      }
     this.calculateTotalPrice();
    }
  }

  removeFromCart(item: IproductDetails) {
    const index = this.cartItems.indexOf(item);
    if (index !== -1) {
      this.cartItems.splice(index, 1);
     this.calculateTotalPrice();
    }
  }
  calculateTotalPrice() {
    this.totalPrice = this.cartItems.reduce((total, item) => total + (item.quantity * item.price), 0);
  }

}
