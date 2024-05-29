import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './product/product.component';
import { CartComponent } from './cart/cart.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  {
    path: 'product', component: ProductComponent
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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
