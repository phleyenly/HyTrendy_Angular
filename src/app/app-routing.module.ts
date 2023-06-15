import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './view/home/home.component';
import { ErrorComponent } from './view/error/error.component';
import { ProductsComponent } from './view/products/products.component';
import { ProductDetailComponent } from './view/product-detail/product-detail.component';
import { CartComponent } from './view/cart/cart.component';
import { LoginComponent } from './view/login/login.component';
import { AdminHomeComponent } from './view/admin/admin-home/admin-home.component';
import { AdminProductComponent } from './view/admin/admin-product/admin-product.component';
import { AdminEditComponent } from './view/admin/admin-edit/admin-edit.component';
import { AdminAddComponent } from './view/admin/admin-add/admin-add.component';
import { AdminAccountComponent } from './view/admin/admin-account/admin-account.component';
import { AuthGuard } from './auth.guard';
import { AdminEditAccountComponent } from './view/admin/admin-edit-account/admin-edit-account.component';
import { AdminAddAccountComponent } from './view/admin/admin-add-account/admin-add-account.component';
import { OrderComponent } from './view/order/order.component';
import { AdminOrderComponent } from './view/admin/admin-order/admin-order.component';
import { AccountComponent } from './view/account/account.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: '', component: HomeComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'products/:id', component: ProductDetailComponent },
  { path: 'cart', component: CartComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'order', component: OrderComponent },
  { path: 'account', component: AccountComponent },
  { path: 'admin/home', component: AdminHomeComponent, canActivate: [AuthGuard] },
  { path: 'admin/products', component: AdminProductComponent, canActivate: [AuthGuard] },
  { path: 'admin/products/edit/:id', component: AdminEditComponent, canActivate: [AuthGuard] },
  { path: 'admin/products/add' , component: AdminAddComponent, canActivate: [AuthGuard]},
  { path: 'admin/account' , component: AdminAccountComponent, canActivate: [AuthGuard]},
  { path: 'admin/account/edit/:id' , component: AdminEditAccountComponent, canActivate: [AuthGuard]},
  { path: 'admin/account/add' , component: AdminAddAccountComponent, canActivate: [AuthGuard]},
  { path: 'admin/order' , component: AdminOrderComponent, canActivate: [AuthGuard]},

  { path: '**', component: ErrorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
