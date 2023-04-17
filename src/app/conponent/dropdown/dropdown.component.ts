import { Component, Input } from '@angular/core';
import { Category } from 'src/app/interface/category';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent {
  @Input("category") category: Category = {id: 0, name: "", types:[] };

  isOpen: String = ""
  
  openDropdown() {
    this.isOpen = "show"
  }

  closeDropdown(){
    this.isOpen = ""
  }
}
