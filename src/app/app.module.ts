import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
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

@NgModule({
  imports:      [ BrowserModule, appRoutes ],
  declarations: [ 
    AppComponent,
    FooterComponent,
    HeaderComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    BannerComponent,
    CartComponent,
    ProductComponent
 ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
