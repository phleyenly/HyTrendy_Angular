import { Component, Input } from '@angular/core';
import { Category } from 'src/app/interface/category';

@Component({
  selector: 'app-dropdown-category',
  templateUrl: './dropdown-category.component.html',
  styleUrls: ['./dropdown-category.component.scss']
})
export class DropdownCategoryComponent {
  @Input("category") category: Category = {id: 0, name: "", code: "" , types:[] };

}
