import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IproductDetails } from '../interface/product-interface';

@Component({
  selector: 'product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent {
  @Input() showPopup: boolean = false;
  @Input() selectedProduct!: IproductDetails;
  @Output() close: EventEmitter<IproductDetails> = new EventEmitter<IproductDetails>();
}
