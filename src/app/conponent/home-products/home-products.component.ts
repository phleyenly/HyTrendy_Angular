import { Component } from '@angular/core';
import { Category } from 'src/app/interface/category';
import { CategoryService } from 'src/app/service/category.service';

@Component({
  selector: 'app-home-products',
  templateUrl: './home-products.component.html',
  styleUrls: ['./home-products.component.scss']
})
export class HomeProductsComponent {
  categories: Category[]= [];
  constructor(private categoryService: CategoryService){}

  ngOnInit(): void {
    this.getAllCategory();
  }

  getAllCategory(): any{
    this.categoryService.getAllCategory().subscribe((c: any) => {
      this.categories = c;
    
  })
}

}
