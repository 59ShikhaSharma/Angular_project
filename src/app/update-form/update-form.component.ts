import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-update-form',
  templateUrl: './update-form.component.html',
  styleUrls: ['./update-form.component.css']
})
export class UpdateFormComponent {

  @Input() updatedProductForm: any;
  @Output() updateFormResult: EventEmitter<any> = new EventEmitter<any>();
  @Input() showformPopup: boolean = false;
  productId: number = -1;
  productData: any;

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
    price: [null],
    quantity: [1]
  })

  updateSubmit() {
    const updatedProduct = this.productForm.value;
    this.updateFormResult.emit(updatedProduct);
  }

}
