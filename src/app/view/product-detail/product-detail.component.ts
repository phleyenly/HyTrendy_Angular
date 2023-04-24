import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/interface/product';
import { ProductService } from 'src/app/service/product.service';
import { TypeService } from 'src/app/service/type.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  product : Product = {id:-1 , name : " ", price: 0, stock:0, size: [], tags: "", origin: "",description: "",image: [] , material: ""};
  tiltle: string[] = [];
  types: string = "";
  categoryCode = this.route.snapshot.queryParamMap.get('categoryCode') 
  typeCode = this.route.snapshot.queryParamMap.get('typeCode')

  constructor(
    private productService: ProductService,
    private typeService: TypeService,
    private route: ActivatedRoute,
){}
  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id') ;
    const idd = id || '';
    const numberId = parseInt(idd);
    this.getById(numberId);
    const type = this.typeCode || '';
    

    setTimeout(() => {
      console.log(this.product);
      console.log(this.typeCode);
      
      
    }, 5000);
  }

  getById( id: number) {
    this.productService.getById(id).subscribe((p: Product)=>{
      this.product = p;
      
    })
  }

  // getTypeByCode(typeCode: string) {
  //   this.typeService.getTypeByCode(typeCode).subscribe((t: any) => {
  //     this.types = t;
  //   })
  // }

}
