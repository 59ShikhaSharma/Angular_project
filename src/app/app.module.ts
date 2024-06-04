import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';

import { ListComponent } from './list/list.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductComponent } from './product/product.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CartComponent } from './cart/cart.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { HttpClientModule } from '@angular/common/http';
import { CreateFormComponent} from './create-form/create-form.component';
import { UpdateFormComponent } from './update-form/update-form.component';


//defining routes
const routes: Routes = [
  { path: "Home", component: HomeComponent },
  { path: "About", component: AboutComponent },
  { path: "Contact", component: ContactComponent },
  { path: "**", component: NotFoundComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ListComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    ProductComponent,
    ProductDetailsComponent,
    CartComponent,
    NotFoundComponent,
    CreateFormComponent,
    UpdateFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
