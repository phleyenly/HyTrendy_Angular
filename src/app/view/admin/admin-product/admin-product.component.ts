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
    if(this.categoryCode !== '' && this.typeCode !== '') {
      this.getByCategoryCodeAndType(this.categoryCode, this.typeCode)
    }
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

  deleteProduct(id: number) {
    this.productService.deleteProduct(id).subscribe((m: any) =>{
      alert(m.message);
      location.reload();

    })
  }

  openCollapse(i: any) {
    const element = document.getElementById("p-"+i);
    if (element) {
      if (element.className === 'd-none') {
        element.className = ''
        console.log(element.className)
      } else {
        element.className = 'd-none'
      }
      // element.classList. = ['d-block'];
    }
  }
}
