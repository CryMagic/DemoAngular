import { Routes, RouterModule } from '@angular/router';

import { ProductComponent } from "./product/product.component";
import { HomeComponent } from './home/home.component';
import { CartComponent } from './cart/cart.component';
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

const routing: Routes = [
    { path: "", component: HomeComponent },
    { path: "cart", component: CartComponent},
    { path: "product", component: ProductComponent },
    { path: "about-us", component: AboutUsComponent },
    { path: "account", component: AccountComponent },
    { path: "add-address", component: AddAddressComponent },
    { path: "blog", component: BlogComponent },
    { path: "blog-detail", component: BlogDetailComponent },
    { path: "category", component: CategoryComponent },
    { path: "checkout", component: CheckoutComponent },
    { path: "contact-us", component: ContactUsComponent },
    { path: "my-address", component: MyAddressComponent },
    { path: "order-list", component: OrderListComponent },
    { path: "order-status", component: OrderStatusComponent },
    { path: "user-information", component: UserInformationComponent },
    { path: "wishlist", component: WishlistComponent },
    { path: "**", component: NotFoundComponent },
]
export const appRoutes = RouterModule.forRoot(routing);