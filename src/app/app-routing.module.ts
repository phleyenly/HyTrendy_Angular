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

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '', component: HomeComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'products/:id', component: ProductDetailComponent },
  { path: 'cart', component: CartComponent },
  { path: 'login', component: LoginComponent },
  { path: 'admin/home', component: AdminHomeComponent },
  { path: 'admin/products', component: AdminProductComponent },
  { path: 'admin/products/edit/:id', component: AdminEditComponent },

  

  { path: '**', component: ErrorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
