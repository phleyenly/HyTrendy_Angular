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

const routes: Routes = [
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard]},
  { path: '', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'products', component: ProductsComponent, canActivate: [AuthGuard] },
  { path: 'products/:id', component: ProductDetailComponent, canActivate: [AuthGuard] },
  { path: 'cart', component: CartComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'admin/home', component: AdminHomeComponent, canActivate: [AuthGuard] },
  { path: 'admin/products', component: AdminProductComponent, canActivate: [AuthGuard] },
  { path: 'admin/products/edit/:id', component: AdminEditComponent, canActivate: [AuthGuard] },
  { path: 'admin/products/add' , component: AdminAddComponent, canActivate: [AuthGuard]},
  { path: 'admin/account' , component: AdminAccountComponent, canActivate: [AuthGuard]},

  

  { path: '**', component: ErrorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
