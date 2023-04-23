import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/interface/product';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  product : Product = {id:-1 , name : " ", price: 0, stock:0, size: [], tags: "", origin: "",description: "",image: [] , material: ""};
  tiltle1: string[] = ["Tất cả sản phẩm" , ""];
  tiltle2: string[]= ["Tất cả sản phẩm" , "Thời Trang Nam"];
  tiltle3: string[]= ["Tất cả sản phẩm" , "Thời Trang Nữ"];
  tiltle: string[] = ["", ""];

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute,
){}
  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id') ;
    const idd = id || '';
    const numberId = parseInt(idd);
    this.getById(numberId);

    setTimeout(() => {
      console.log(this.product);
      
    }, 5000);
  }

  getById( id: number) {
    this.productService.getById(id).subscribe((p: Product)=>{
      this.product = p;
      this.tiltle = this.tiltle1;
    })
  }

}
