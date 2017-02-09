import { Routes, RouterModule } from '@angular/router';
import { ProductComponent } from "./product/product.component";
import { HomeComponent } from './home/home.component';
import { CartComponent } from './cart/cart.component';

const routing: Routes = [
    { path: "", component: HomeComponent },
    { path: "cart", component: CartComponent},
    { path: "product", component: ProductComponent }
]
export const appRoutes = RouterModule.forRoot(routing);