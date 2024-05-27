import { Component } from '@angular/core';
import { productDetails } from './interface/product-interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'learn-angular';
  cartItems: productDetails[] = [];

  handleCartItems(items: productDetails[]) {
    this.cartItems = items;
    console.log('Received cart items:', this.cartItems);
    // Handle the cart items as needed in the parent component
  }

  updateCartItems(items: productDetails[]) {
    this.cartItems = items;
  }

  handleSearch(searchQuery: string) {
    // Implement your search logic here
  }

}
