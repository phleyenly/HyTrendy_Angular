import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/interface/product';
import { ProductService } from 'src/app/service/product.service';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent  implements OnInit{
 
  products: Product[] =[];

  constructor( 
    private productService: ProductService){}

 ngOnInit(): void {
    this.getAllProduct()

    setTimeout(() => {
      console.log(this.products)
    }, 5000);
  }

  getAllProduct() {
    this.productService.getAllProduct().subscribe((p: Product[]) =>{
      this.products = p;
    
    })
}
}
