import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { APP_BASE_HREF } from '@angular/common';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';


import { appRoutes } from './app.routes'

import { AppComponent }  from './app.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HeaderComponent } from './shared/header/header.component';
import { LoginComponent } from './shared/header/login/login.component';
import { RegisterComponent } from './shared/header/register/register.component';
import { HomeComponent } from './home/home.component';
import { BannerComponent } from './banner/banner.component';
import { CartComponent } from './cart/cart.component';
import { ProductComponent } from './product/product.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { AccountComponent } from './account/account.component';
import { AddAddressComponent } from './add-address/add-address.component';
import { BlogComponent } from './blog/blog.component';
import { BlogDetailComponent } from './blog-detail/blog-detail.component';
import { CategoryComponent } from './category/category.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { NotFoundComponent } from './error/error.component';
import { MyAddressComponent } from './my-address/my-address.component';
import { OrderListComponent } from './order-list/order-list.component';
import { OrderStatusComponent } from './order-status/order-status.component';
import { UserInformationComponent } from './user-information/user-information.component';
import { WishlistComponent } from './wishlist/wishlist.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpModule, appRoutes ],
  declarations: [ 
    AppComponent,
    FooterComponent,
    HeaderComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    BannerComponent,
    CartComponent,
    ProductComponent,
    AboutUsComponent,
    AccountComponent,
    AddAddressComponent,
    BlogComponent,
    BlogDetailComponent,
    CategoryComponent,
    CheckoutComponent,
    ContactUsComponent,
    NotFoundComponent,
    MyAddressComponent,
    OrderListComponent,
    OrderStatusComponent,
    UserInformationComponent,
    WishlistComponent
 ],
  providers: [],  
  bootstrap:    [ AppComponent ]
  
})
export class AppModule { }
