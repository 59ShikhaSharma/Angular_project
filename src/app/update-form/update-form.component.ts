import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { FormDataService } from '../services/form-data.service';

@Component({
  selector: 'app-update-form',
  templateUrl: './update-form.component.html',
  styleUrls: ['./update-form.component.css']
})
export class UpdateFormComponent {
  productId: number = -1;
  productData: any;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private formDataService: FormDataService
  ) { }
  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      this.productId = Number(params.get('id'));
    });
    this.productData = history.state;
    this.productForm.patchValue({
      imageUrl: this.productData.imageUrl,
      name: this.productData.name,
      price: this.productData.price,
      quantity: this.productData.quantity
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
    this.formDataService.storeUpdatedData(updatedProduct, this.productId);
    this.router.navigate(['/product']);
  }
}
