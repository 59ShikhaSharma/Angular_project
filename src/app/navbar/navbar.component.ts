import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CartService } from '../cart.service';
import { IproductDetails } from '../interface/product-interface';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  cartItems: IproductDetails[] = [];

  @Output() search = new EventEmitter<string>();

  constructor(private cartService: CartService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.cartItems = this.cartService.getCartItems();
  }

  onSearch(event: any): void {
    const query = event.target.value;
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: { search: query },
      queryParamsHandling: 'merge'
    });
  }
}


