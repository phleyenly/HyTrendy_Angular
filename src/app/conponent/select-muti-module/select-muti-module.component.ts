import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SelectItem } from 'src/app/interface/select-item';

@Component({
  selector: 'app-select-muti-module',
  templateUrl: './select-muti-module.component.html',
  styleUrls: ['./select-muti-module.component.scss']
})
export class SelectMutiModuleComponent implements OnInit  {
  
  
  @Input() optionItems: SelectItem[] = [
    {id: -1, name: ''}
  ];
  @Input() multipe: boolean = true;
  @Output() onChangeSelect = new EventEmitter<any>();
  @Input() selectedValues: any ;
  // @Input() selected: any[] = []

 
  

  // @Input() selectTypeId: number = -1;

  ngOnInit(): void {
   
   this.selectedValues = { id: 1 , name: "Thời Trang Nam"} 
   
  setTimeout(() => {
    console.log(this.selectedValues)  
  }, 5000);
  }
  
  onChange(event: any[]) {
  }

  onSelectionChange(selectedItems: any)  {
    // debugger;
    if (Array.isArray(selectedItems)) {
      const newList = selectedItems.map((x) => x.id);
      this.selectedValues = [...newList]
      this.onChange([...newList]);

      console.log(selectedItems)
      
    }
    this.onChangeSelect.emit(selectedItems)
  }

  onTouched() {}

  selectAllItems() {
  }

  toggleCheckAll(values: any) {
    // console.log(values)
    if (values.currentTarget.checked) {
      this.selectAllItems();
    } else {
      this.unselectAllItems();
    }
  }

  unselectAllItems() {
    this.selectedValues = [];
    this.onChange([]);
  }
  


  

}
