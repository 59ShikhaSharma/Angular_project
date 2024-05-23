import { Component,EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent {
  @Input() showPopup: boolean = false;
  @Input() selectedProduct: any;
  @Output() close: EventEmitter<any> = new EventEmitter<any>();
}
