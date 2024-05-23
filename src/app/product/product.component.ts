import { Component } from '@angular/core';
import { productDetails } from '../interface/product-interface';

@Component({
  selector: 'product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  products: productDetails[] = [
    { id: 1, name: 'Gown', price: 10, description: 'Silk Fabric , Round Neck , Thread Work design', imageUrl: '/assets/images/dress1.webp',general:"Product Details: Red and solid green ,  fit and flare dress ,  three quarter regular sleeves , midi length in flare hem" },
    { id: 2, name: ' Jeans ', price: 20, description: 'Straight Fit , Blue , High waist', imageUrl: '/assets/images/dress2.jpg',general:"Product Details : Light shade , light fade blue jeans , straight fit , clean look , strechable, 5 pockets, regular length"  },
    { id: 3, name: 'Kurta Set', price: 30, description: 'Cotton Fabric, Round neck, Yellow , Thread work design ', imageUrl: '/assets/images/dress3.jpg' ,general:"Straight shape, regular style, Round neck, Three quarter regular sleeves , thread work detail , solid trouser" },
    { id: 4, name: 'Kurta Set', price: 40, description: 'Polyester, red , with plasso ', imageUrl: '/assets/images/dress4.jpg',general:"Straight shape, regular style, Round neck, Three quarter regular sleeves , thread work detail , solid trouser"  },
    { id: 5, name: 'Anarkali', price: 50, description: 'Silk , Black Straight-fit Anarkali kurta set', imageUrl: '/assets/images/dress5.jpg',general:"Regular style with embroydary on the kurta , solid black with white dupatta, turtle neck , Three quarter regular sleeves"  },
    { id: 6, name: 'Kurta', price: 60, description: 'Polyester, White Kurta set with plasso', imageUrl: '/assets/images/dress6.jpg' ,general:"Straight shape, regular style, Round neck, Three quarter regular sleeves , thread work detail , solid trouser" },
    { id: 7, name: 'T-Shirt', price: 70, description: 'Cotton, Black Round neck ', imageUrl: '/assets/images/dress7.jpg' ,general:"Round neck t-shirt, solid black , regular fit , design on the front , half sleeves " },
    { id: 8, name: 'Round neck T', price: 50, description: 'Cotton , Blue Round Neck', imageUrl: '/assets/images/dress8.jpg',general:"Round neck t-shirt, solid blue , regular fit , design on the front , half sleeves"  },
    { id: 9, name: 'T-Shirt', price: 60, description: 'Cotton, Black Round neck ', imageUrl: '/assets/images/dress9.jpg' ,general:"Round neck t-shirt, solid black , regular fit , design on the front , half sleeves" }
  ];

  showPopup: boolean = false;
  selectedProduct: any;
  showProductDescription(product: any): void {
    this.showPopup = true;
    this.selectedProduct = product;
  }
  hideProductDescription(): void {
    this.showPopup = false;
  }

  addToCart(product: any) {
    //  logic for adding the product to the cart here
    console.log('Added to cart:', product);
  }


  rateProduct(productId: number, rating: number) {
    // Find the product by its ID
    const product = this.products.find(p => p.id === productId);
    if (product) {
      // Set the rating for the product
      // product.rating = rating;
    }
  }
}
  
