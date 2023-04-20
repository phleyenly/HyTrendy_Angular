import { Component } from '@angular/core';
import { Category } from 'src/app/interface/category';
import { Product } from 'src/app/interface/product';
import { CategoryService } from 'src/app/service/category.service';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-home-products',
  templateUrl: './home-products.component.html',
  styleUrls: ['./home-products.component.scss']
})
export class HomeProductsComponent {
 active: any = {
  categoryCode: "",
  typeCode: ""
 }

  categories: Category[]= [];
  products: Product[] =[];
  productdetail : Product[] =[];
  constructor(private categoryService: CategoryService ,
              private productService: ProductService){}

  ngOnInit(): void {
    this.getAllCategory();
    this.getAllProduct();
  }

  getAllCategory(): any{
    this.categoryService.getAllCategory().subscribe((c: any) => {
      this.categories = c;
    
     })
  }
  
  getAllProduct(): any{
    this.productService.getAllProduct().subscribe((p:any) => {
      this.products = p;
    })

    this.active = {
      categoryCode: "",
      typeCode: ""
    }
  }

  onChangeCategoryAndType($event : any) {
    this.getByCategoryAndType($event.categoryCode , $event.typeCode)

    this.active = $event

  }

  getByCategoryAndType( categoryCode : string , typeCode: string)  {
    this.productService.getByCategoryAndType(categoryCode , typeCode).subscribe((p:any) =>{
      this.products = p;
    })
  }
  
}
