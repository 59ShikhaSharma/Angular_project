import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './product/product.component';
import { CartComponent } from './cart/cart.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { FormComponent } from './form/form.component';
import { UpdateFormComponent } from './update-form/update-form.component';

const routes: Routes = [
  {
    path: 'product', component: ProductComponent
  },
  {
    path: 'update/:id', component:UpdateFormComponent
  },
  {
    path: 'cart', component: CartComponent
  },
  {
    path: 'about', component: AboutComponent

  },
  {
    path: 'contact', component: ContactComponent
  },
  {
    path:'form', component:FormComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
