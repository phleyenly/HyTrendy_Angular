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
    SlideProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    BsDropdownModule.forRoot(),
    HttpClientModule,
    CarouselModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
