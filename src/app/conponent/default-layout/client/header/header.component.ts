import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/interface/category';
import { CategoryService } from 'src/app/service/category.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent  implements OnInit{
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
