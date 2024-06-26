import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { IproductDetails } from '../interface/product-interface';

@Component({
  selector: 'app-update-form',
  templateUrl: './update-form.component.html',
  styleUrls: ['./update-form.component.css']
})
export class UpdateFormComponent {

  @Input() updatedProductForm!: IproductDetails;
  @Output() updateFormResult: EventEmitter<any> = new EventEmitter<IproductDetails>();
  @Input() showformPopup: boolean = false;
  productId: number = -1;
  productData: IproductDetails | undefined;

  constructor(
    private fb: FormBuilder
  ) { }
  ngOnInit() {
    this.productForm.patchValue({
      imageUrl: this.updatedProductForm.imageUrl,
      name: this.updatedProductForm.name,
      price: this.updatedProductForm.price,
      quantity: this.updatedProductForm.quantity
    });
  }

  productForm = this.fb.group({
    imageUrl: [''],
    name: [''],
    price: [3],
    quantity: [1]
  })

  updateSubmit() {
    const updatedProduct = this.productForm.value;
    this.updateFormResult.emit(updatedProduct);
  }
}

