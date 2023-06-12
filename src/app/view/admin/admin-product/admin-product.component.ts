import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NotifierService } from 'angular-notifier';
import { PageChangedEvent } from 'ngx-bootstrap/pagination';
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
  totalItems : number = 0;
  currentPage = 1;
  maxSize = 5;
  limit: number = 3;

  constructor( 
    private productService: ProductService,
    private route: ActivatedRoute,
    private notifier: NotifierService){}

  ngOnInit(): void {
    
    if(this.categoryCode !== '' && this.typeCode !== '') {
      this.getByCategoryCodeAndType(this.categoryCode, this.typeCode)
    } else {
      this.getAllProduct(this.currentPage, this.limit);
    }

    this.countProduct();
  }

  pageChanged(event: PageChangedEvent): void {
    this.currentPage = event.page;
    this.getAllProduct(this.currentPage, this.limit);
    // if(this.categoryCode === null && this.typeCode === null) {
    //   this.getAllProduct(this.currentPage, this.limit);
    // }
  }

  countProduct() {
    this.productService.countProduct().subscribe((t: number) => {
      this.totalItems = t;
    })
  }

  getAllProduct(page: number, limit: number) {
    this.productService.getAllProduct(page, limit).subscribe((p: Product[]) => {
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
      // alert(m.message);
      this.notifier.notify('success', m.message);
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
