import { Component } from '@angular/core';
import { FormDataService } from '../services/form-data.service';

@Component({
  selector: 'app-form',
  templateUrl: './create-form.component.html',
  styleUrls: ['./create-form.component.css']
})
export class CreateFormComponent {
  formData = {
    name: '',
    price: '',
    imageUrl: '',
    quantity:''
  };

 constructor(private formDataService:FormDataService){}

  onSubmit() {
    console.log('Form submitted:', this.formData);
    this.formDataService.form(this.formData)
  }
}
