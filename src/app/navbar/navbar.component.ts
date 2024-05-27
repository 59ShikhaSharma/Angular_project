// import { Component, Input } from '@angular/core';
// import { productDetails } from '../interface/product-interface';

// @Component({
//   selector: 'navbar',
//   templateUrl: './navbar.component.html',
//   styleUrls: ['./navbar.component.css']
// })
// export class NavbarComponent {
//   @Input() cartItems: productDetails[] = [];

//   constructor() {}

// }

import { Component, OnInit , Output, EventEmitter  } from '@angular/core';
import { CartService } from '../cart.service';
import { productDetails } from '../interface/product-interface';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
 searchQuery: string = '';
  cartItems: productDetails[] = [];

@Output() search = new EventEmitter<string>();

  onSearch() {
    this.search.emit(this.searchQuery.trim());
  }
  constructor(private cartService: CartService) {}

  ngOnInit() {
    this.cartItems = this.cartService.getCartItems();
  }
}

// import { Component, Input, Output, EventEmitter  } from '@angular/core';
// import { productDetails } from '../interface/product-interface';

// @Component({
//   selector: 'navbar',
//   templateUrl: './navbar.component.html',
//   styleUrls: ['./navbar.component.css']
// })
// export class NavbarComponent {
//   searchQuery: string = '';
//   @Input() cartItems: productDetails[] = [];
//   @Output() search = new EventEmitter<string>();

//   onSearch() {
//     this.search.emit(this.searchQuery.trim());
//   }
//   constructor() {}
// }
