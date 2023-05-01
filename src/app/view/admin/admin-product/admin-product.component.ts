import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/interface/product';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-admin-product',
  templateUrl: './admin-product.component.html',
  styleUrls: ['./admin-product.component.scss']
})
export class AdminProductComponent implements OnInit {
  products: Product[] =[];
  categoryCode = this.route.snapshot.queryParamMap.get("categoryCode") || '';
  typeCode = this.route.snapshot.queryParamMap.get("typeCode") || '';

  constructor( 
    private productService: ProductService,
    private route: ActivatedRoute){}

  ngOnInit(): void {
   this.getAllProduct();
   this.getByCategoryCodeAndType(this.categoryCode, this.typeCode)
  }

  getAllProduct() {
    this.productService.getAllProduct().subscribe((p: Product[]) => {
      this.products = p;
    })
  }

  getByCategoryCodeAndType ( categoryCode: string , typeCode: string) {
    this.productService.getByCategoryAndType(categoryCode, typeCode).subscribe((p: Product[]) =>{
      this.products = p;
    })
  }
}
