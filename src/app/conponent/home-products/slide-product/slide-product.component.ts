import { Component, Input } from '@angular/core';
import { Product } from 'src/app/interface/product';

@Component({
  selector: 'app-slide-product',
  templateUrl: './slide-product.component.html',
  styleUrls: ['./slide-product.component.scss']
})
export class SlideProductComponent {
  @Input("product") product: Product = {id:-1 , name : " ", price: 0, stock:0, size: [], tags: "", origin: "",description: "",image: []};

  
}
