import { Component } from '@angular/core';
import { IproductDetails } from './interface/product-interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'learn-angular';
  cartItems: IproductDetails[] = [];

  handleCartItems(items: IproductDetails[]) {
    this.cartItems = items;
    console.log('Received cart items:', this.cartItems);
  }

  updateCartItems(items: IproductDetails[]) {
    this.cartItems = items;
  }
}
