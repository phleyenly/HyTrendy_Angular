import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PageChangedEvent } from 'ngx-bootstrap/pagination';
import { Category } from 'src/app/interface/category';
import { Product } from 'src/app/interface/product';
import { CategoryService } from 'src/app/service/category.service';
import { ProductService } from 'src/app/service/product.service';
import { TypeService } from 'src/app/service/type.service';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  products: Product[] =[];
  category: Category = {id: 0, name: '', code:'', types:[]};
  title: string[] = [];
  types: string = "";
  categoryCode = this.route.snapshot.queryParamMap.get('categoryCode');
  typeCode = this.route.snapshot.queryParamMap.get('typeCode');
  totalItems : number = 0;
  currentPage = 1;
  maxSize = 5;
  limit: number = 3;
   
  constructor( 
    private productService: ProductService ,
    private categoryService: CategoryService,
    private typeService: TypeService,
    private route: ActivatedRoute
  ){}

  async ngOnInit()  {
    if(this.categoryCode == null && this.typeCode == null) {
      this.getAllProduct(this.currentPage, this.limit)
      this.title.push("Tất cả sản phẩm")
    } else {
      const category = this.categoryCode || '';
      const type = this.typeCode || '';
      this.getByCategoryAndType( category, type)
      await this.getCategoryByCode(category);
      this.title.push("Tất cả sản phẩm" );
      this.title.push(this.category.name);
      await this.getTypeByCode(category, type);
      this.title.push(this.types);
    }

    this.countProduct();
    
  }

  // setPage(pageNo: number): void {
  //   this.currentPage = pageNo;
   
  // }

  pageChanged(event: PageChangedEvent): void {
    this.currentPage = event.page;
    if(this.categoryCode == null && this.typeCode == null) {
      this.getAllProduct(this.currentPage, this.limit)
    }
    
  }

  getAllProduct(page: number, limit: number) {
    this.productService.getAllProduct(page, limit).subscribe((p: Product[]) => {
      this.products = p;
    })
  }

  getByCategoryAndType(categoryCode: string, typeCode: string) {
    this.productService.getByCategoryAndType(categoryCode,typeCode).subscribe((p: Product[]) => {
      this.products = p;
    })
  }

  async getCategoryByCode(categoryCode: string) {
    this.category = await this.categoryService.getCategoryByCode(categoryCode).toPromise();
  }

  async getTypeByCode(categoryCode: string, typeCode: string) {
    this.types = await this.typeService.getTypeByCode(categoryCode, typeCode).toPromise();
  }

  countProduct() {
    this.productService.countProduct().subscribe((m: number) => {
      this.totalItems = m;
    })
  }
}
