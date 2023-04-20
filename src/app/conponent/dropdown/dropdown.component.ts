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
  @Input("active") active: any = {
    categoryCode: "",
    typeCode: ""
  }


  isOpen: String = ""
  
  openDropdown() {
    this.isOpen = "show"
  }

  closeDropdown(){
    this.isOpen = ""
  }

  onDropdownClick (categoryCode : string , typeCode: string){
    const data = {"categoryCode": categoryCode , "typeCode": typeCode}
    this.onChangeCategoryAndType.emit(data );

    this.active = data



  }
}
