import { NgModule, RendererFactory2 } from '@angular/core';
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
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
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
import { AdminProductComponent } from './view/admin/admin-product/admin-product.component';
import { AdminEditComponent } from './view/admin/admin-edit/admin-edit.component';
import { FormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { SelectMutiModuleComponent } from './conponent/select-muti-module/select-muti-module.component';
import { AdminAddComponent } from './view/admin/admin-add/admin-add.component';
import { AdminAccountComponent } from './view/admin/admin-account/admin-account.component';
import { AdminEditAccountComponent } from './view/admin/admin-edit-account/admin-edit-account.component';
import { AuthInterceptor } from './auth.interceptor';
import { AdminAddAccountComponent } from './view/admin/admin-add-account/admin-add-account.component';
import { OrderComponent } from './view/order/order.component';
import { CollapseOrderComponent } from './conponent/collapse-order/collapse-order.component';
import { AdminOrderComponent } from './view/admin/admin-order/admin-order.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { AccountComponent } from './view/account/account.component';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { NotifierModule, NotifierOptions } from 'angular-notifier';
import { CollapseSidebarComponent } from './conponent/collapse-sidebar/collapse-sidebar.component';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { CollapseSidebarLv2Component } from './conponent/collapse-sidebar-lv2/collapse-sidebar-lv2.component';

const customNotifierOptions: NotifierOptions = {
  position: {
    horizontal: {
      position: 'right',
      distance: 12,
    },
    vertical: {
      position: 'top',
      distance: 12,
      gap: 10,
    },
  },
  theme: 'material',
  behaviour: {
    autoHide: 5000,
    onClick: 'hide',
    onMouseover: 'pauseAutoHide',
    showDismissButton: true,
    stacking: 4,
  },
  animations: {
    enabled: true,
    show: {
      preset: 'slide',
      speed: 300,
      easing: 'ease',
    },
    hide: {
      preset: 'fade',
      speed: 300,
      easing: 'ease',
      offset: 50,
    },
    shift: {
      speed: 300,
      easing: 'ease',
    },
    overlap: 150,
  },
};


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
    AdminProductComponent,
    AdminEditComponent,
    SelectMutiModuleComponent,
    AdminAddComponent,
    AdminAccountComponent,
    AdminEditAccountComponent,
    AdminAddAccountComponent,
    OrderComponent,
    CollapseOrderComponent,
    AdminOrderComponent,
    AccountComponent,
    CollapseSidebarComponent,
    CollapseSidebarLv2Component
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
    NgSelectModule,
    ModalModule.forRoot(),
    PaginationModule.forRoot(),
    NotifierModule.withConfig(customNotifierOptions),
    CollapseModule.forRoot(),
  ],
  providers: [ 
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
