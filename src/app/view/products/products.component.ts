import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/interface/product';
import { ProductService } from 'src/app/service/product.service';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent  implements OnInit{
 
  products: Product[] =[];

   categoryCode = this.route.snapshot.paramMap.get('categoryCode') 
   typeCode = this.route.snapshot.paramMap.get('typeCode')
   

  constructor( 
    private productService: ProductService ,

    private route: ActivatedRoute){}

 ngOnInit(): void {
  console.log(this.route.snapshot.queryParamMap.get("id"))
    if(this.categoryCode == null && this.typeCode == null) {
      this.getAllProduct()
    } else {
      const category = this.categoryCode || '';
    const type = this.typeCode || '';
    this.getByCategoryAndType( category, type)
   }
   

    setTimeout(() => {
      console.log(this.products)
      console.log(this.categoryCode)
      console.log(this.typeCode)
    }, 5000);
  }

  getAllProduct() {
    this.productService.getAllProduct().subscribe((p: Product[]) =>{
      this.products = p;
    
    })
}

getByCategoryAndType ( categoryCode: string, typeCode: string) {
  this.productService.getByCategoryAndType(categoryCode,typeCode).subscribe((p: Product[]) =>{
    this.products = p;
  })
}
}
