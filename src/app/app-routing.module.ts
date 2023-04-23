import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './view/home/home.component';
import { ErrorComponent } from './view/error/error.component';
import { ProductsComponent } from './view/products/products.component';
import { ProductDetailComponent } from './view/product-detail/product-detail.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '', component: HomeComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'products/:categoryCode/:typeCode', component: ProductsComponent },
  { path: 'product-detail/:id', component: ProductDetailComponent },

  

  { path: '**', component: ErrorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
