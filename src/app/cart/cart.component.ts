import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { IproductDetails } from '../interface/product-interface';

@Component({
  selector: 'cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartItems: IproductDetails[] = [];
  constructor(private cartService: CartService) { }

  ngOnInit() {
    this.cartItems = this.cartService.getCartItems();
    console.log(this.cartItems);
  }

  increaseQuantity(item: any) {
    item.quantity++;
  }

  decreaseQuantity(item: any) {
    if (item.quantity > 0) {
      item.quantity--;
    }
  }
}
