import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Category } from 'src/app/interface/category';
import { Product } from 'src/app/interface/product';
import { CategoryService } from 'src/app/service/category.service';
import { ProductService } from 'src/app/service/product.service';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  products: Product[] =[];
  category: Category = {id: 0, name: '', code:'', types:[]};
  title: string[] = [];
  categoryCode = this.route.snapshot.queryParamMap.get('categoryCode') 
  typeCode = this.route.snapshot.queryParamMap.get('typeCode')
   
  constructor( 
    private productService: ProductService ,
    private categoryService: CategoryService,
    private route: ActivatedRoute
  ){}

  async ngOnInit()  {
    if(this.categoryCode == null && this.typeCode == null) {
      this.getAllProduct()
      this.title.push("Tất cả sản phẩm")
    } else {
      const category = this.categoryCode || '';
      const type = this.typeCode || '';
      this.getByCategoryAndType( category, type)
      await this.getCategoryByCode(category);
      this.title.push("Tất cả sản phẩm" );
    }
    setTimeout(() => {
      console.log(this.category.name)
      console.log(this.title)
      this.title.push(this.category.name);
    }, 5000);
  }

  getAllProduct() {
    this.productService.getAllProduct().subscribe((p: Product[]) => {
      this.products = p;
    })
  }

  getByCategoryAndType(categoryCode: string, typeCode: string) {
    this.productService.getByCategoryAndType(categoryCode,typeCode).subscribe((p: Product[]) => {
      this.products = p;
    })
  }

  async getCategoryByCode(categoryCode: string) {
    await this.categoryService.getCategoryByCode(categoryCode).subscribe(async(c: Category) => {
      this.category = c;
    })
  }
}
