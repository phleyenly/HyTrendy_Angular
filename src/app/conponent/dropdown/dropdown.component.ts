import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Category } from 'src/app/interface/category';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent {
  @Input("category") category: Category = {id: 0, name: "", code: "" , types:[] };
  @Output () onChangeCategoryAndType = new EventEmitter<any>();

  isOpen: String = ""
  
  openDropdown() {
    this.isOpen = "show"
  }

  closeDropdown(){
    this.isOpen = ""
  }

  onDropdownClick (categoryCode : string , typeCode: string){
    this.onChangeCategoryAndType.emit({"categoryCode": categoryCode , "typeCode": typeCode} );

  }
}
