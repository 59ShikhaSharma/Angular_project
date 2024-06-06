// import { Component, EventEmitter, Output } from '@angular/core';
// import { IproductDetails } from '../interface/product-interface';
// import { CartService } from '../cart.service';

// @Component({
//   selector: 'product',
//   templateUrl: './product.component.html',
//   styleUrls: ['./product.component.css']
// })
// export class ProductComponent {
//   products: IproductDetails[] = [
//     { id: 1, name: 'Gown', price: 10, description: 'Silk Fabric , Round Neck , Thread Work design', imageUrl: '/assets/images/dress1.webp', general: "Product Details: Red and solid green ,  fit and flare dress ,  three quarter regular sleeves , midi length in flare hem", quantity: 1, rating: 3 },
//     { id: 2, name: ' Jeans ', price: 20, description: 'Straight Fit , Blue , High waist', imageUrl: '/assets/images/dress2.jpg', general: "Product Details : Light shade , light fade blue jeans , straight fit , clean look , strechable, 5 pockets, regular length", quantity: 1, rating: 3 },
//     { id: 3, name: 'Kurta Set', price: 30, description: 'Cotton Fabric, Round neck, Yellow , Thread work design ', imageUrl: '/assets/images/dress3.jpg', general: "Straight shape, regular style, Round neck, Three quarter regular sleeves , thread work detail , solid trouser", quantity: 1, rating: 3 },
//     { id: 4, name: 'Kurta Set', price: 40, description: 'Polyester, red , with plasso ', imageUrl: '/assets/images/dress4.jpg', general: "Straight shape, regular style, Round neck, Three quarter regular sleeves , thread work detail , solid trouser", quantity: 1, rating: 3 },
//     { id: 5, name: 'Anarkali', price: 50, description: 'Silk , Black Straight-fit Anarkali kurta set', imageUrl: '/assets/images/dress5.jpg', general: "Regular style with embroydary on the kurta , solid black with white dupatta, turtle neck , Three quarter regular sleeves", quantity: 1, rating: 3 },
//     { id: 6, name: 'Kurta', price: 60, description: 'Polyester, White Kurta set with plasso', imageUrl: '/assets/images/dress6.jpg', general: "Straight shape, regular style, Round neck, Three quarter regular sleeves , thread work detail , solid trouser", quantity: 1, rating: 3 },
//     { id: 7, name: 'T-Shirt', price: 70, description: 'Cotton, Black Round neck ', imageUrl: '/assets/images/dress7.jpg', general: "Round neck t-shirt, solid black , regular fit , design on the front , half sleeves ", quantity: 1, rating: 3 },
//     { id: 8, name: 'Round neck T', price: 50, description: 'Cotton , Blue Round Neck', imageUrl: '/assets/images/dress8.jpg', general: "Round neck t-shirt, solid blue , regular fit , design on the front , half sleeves", quantity: 1, rating: 3 },
//     { id: 9, name: 'T-Shirt', price: 60, description: 'Cotton, Black Round neck ', imageUrl: '/assets/images/dress9.jpg', general: "Round neck t-shirt, solid black , regular fit , design on the front , half sleeves", quantity: 1, rating: 3 }
//   ];

//   cartItems: IproductDetails[] = []; // Variable to store items in the cart
//   @Output() addToCartEvent = new EventEmitter<IproductDetails[]>(); // EventEmitter to emit cartItems to parent component
//   @Output() cartItemsChange = new EventEmitter<IproductDetails[]>();

//   // constructor() {}
//   constructor(private cartService: CartService) { }

//   showPopup: boolean = false;
//   selectedProduct: any;
//   showProductDescription(product: any): void {
//     this.showPopup = true;
//     this.selectedProduct = product;
//   }
//   hideProductDescription(): void {
//     this.showPopup = false;
//   }

//   rateProduct(productId: number, rating: number) {
//     // Find the product by its ID
//     const product = this.products.find(p => p.id === productId);
//     if (product) {
//       // Set the rating for the product
//       product.rating = rating;
//     }
//   }

//   addToCart(product: IproductDetails) {
//     // Add the product to the cart
//     //this.cartItems.push(product);
//     console.log('Added to cart:', this.cartItems);
//     //this.cartItemsChange.emit(this.cartItems);
//     this.cartService.addToCart(product);
//     alert('Item added to cart!');
//   }
// }


import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import { IproductDetails } from '../interface/product-interface';
import { CartService } from '../services/cart.service';
import { ProductService } from '../services/product.service';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { FormDataService } from '../services/form-data.service';

@Component({
  selector: 'product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  cartItems: IproductDetails[] = [];
  products: IproductDetails[] = [];
  filteredProducts: IproductDetails[] = [];
  showPopup: boolean = false;
  showformPopup: boolean = false;
  selectedProduct: IproductDetails | undefined;
  updatedProductForm: IproductDetails | undefined;
  updatedIdNumber: number = -1;


  @Output() addToCartEvent = new EventEmitter<IproductDetails[]>();

  constructor(private productService: ProductService,
    private cartService: CartService,
    private route: ActivatedRoute, private formBuilder: FormBuilder, private formDataService: FormDataService
  ) { }

  ngOnInit(): void {
    this.productService.getProducts().subscribe(

      (product: any) => {
        console.log(product);
        this.products = product.map((item: IproductDetails) => ({
          id: item.id,
          name: item.title,
          price: item.price,
          description: item.description,
          imageUrl: item.image,
          general: item.category,
          quantity: 10,
          rating: item.rating
        }));

        //create product
        this.filteredProducts = this.products;
        this.formDataService.productdata.forEach((item) => {
          this.filteredProducts.push(item);
        })

        //search
        this.route.queryParams.subscribe(params => {
          this.filterProducts(params['search'] || '');
        });
      },

      error => {
        console.error('Error fetching products:', error);
      }
    );
  }

  deleteProduct(id: number) {
    this.filteredProducts.splice(id, 1);
  }

  filterProducts(query: string): void {
    if (!query) {
      this.filteredProducts = this.products;
    } else {
      const lowerCaseQuery = query.toLowerCase();
      this.filteredProducts = this.products.filter(product =>
        (product.name && product.name.toLowerCase().includes(lowerCaseQuery)) ||
        (product.general && product.general.toLowerCase().includes(lowerCaseQuery))
      );
    }
  }

  showProductDescription(product: IproductDetails): void {
    this.showPopup = true;
    this.selectedProduct = product;
  }
  hideProductDescription(): void {
    this.showPopup = false;
  }

  rateProduct(productId: number, rating: number) {
    const product = this.products.find(p => p.id === productId);
    if (product) {
      product.rating = rating;
    }
  }

  addToCart(product: IproductDetails) {
    console.log('Added to cart:', this.cartItems);
    this.cartService.addToCart(product);
    alert('Item added to cart!');
  }

  //updateform
  updateForm(item: IproductDetails, id: number) {
    this.updatedProductForm = item;
    this.showformPopup = true;
    this.updatedIdNumber = id;
  }

  updateFormResult(item: IproductDetails) {
    this.filteredProducts[this.updatedIdNumber] = item;
    this.showformPopup = false;
  }

}