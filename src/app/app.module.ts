import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './conponent/default-layout/client/header/header.component';
import { FooterComponent } from './conponent/default-layout/client/footer/footer.component';
import { HomeComponent } from './view/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { DropdownComponent } from './conponent/dropdown/dropdown.component';
import { ErrorComponent } from './view/error/error.component';
import { HttpClientModule } from '@angular/common/http';
import { SliderComponent } from './conponent/slider/slider.component';
import { HomeProductsComponent } from './conponent/home-products/home-products.component';
import { SlideProductComponent } from './conponent/home-products/slide-product/slide-product.component';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { ProductsComponent } from './view/products/products.component';
import { ProductCardComponent } from './conponent/product-card/product-card.component';
import { ProductDetailComponent } from './view/product-detail/product-detail.component';
import { CartComponent } from './view/cart/cart.component';
import { LoginComponent } from './view/login/login.component';
import { AdminHomeComponent } from './view/admin/admin-home/admin-home.component';
import { DropdownAdminComponent } from './conponent/dropdown-admin/dropdown-admin.component';
import { FooterAdminComponent } from './conponent/default-layout/admin/footer-admin/footer-admin.component';
import { HeaderAdminComponent } from './conponent/default-layout/admin/header-admin/header-admin.component';
import { SidebarComponent } from './conponent/default-layout/admin/sidebar/sidebar.component';
import { DropdownCategoryComponent } from './conponent/dropdown-category/dropdown-category.component';
import { AdminProductComponent } from './view/admin/admin-product/admin-product.component';
import { AdminEditComponent } from './view/admin/admin-edit/admin-edit.component';
import { FormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { SelectMutiModuleComponent } from './conponent/select-muti-module/select-muti-module.component';
import { AdminAddComponent } from './view/admin/admin-add/admin-add.component';
import { AdminAccountComponent } from './view/admin/admin-account/admin-account.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    DropdownComponent,
    ErrorComponent,
    SliderComponent,
    HomeProductsComponent,
    SlideProductComponent,
    ProductsComponent,
    ProductCardComponent,
    ProductDetailComponent,
    CartComponent,
    LoginComponent,
    AdminHomeComponent,
    DropdownAdminComponent,
    FooterAdminComponent,
    HeaderAdminComponent,
    SidebarComponent,
    DropdownCategoryComponent,
    AdminProductComponent,
    AdminEditComponent,
    SelectMutiModuleComponent,
    AdminAddComponent,
    AdminAccountComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    BsDropdownModule.forRoot(),
    HttpClientModule,
    CarouselModule.forRoot(),
    FormsModule,
    NgSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
