import { Component, EventEmitter, Input, Output } from '@angular/core';
import { SelectItem } from 'src/app/interface/select-item';

@Component({
  selector: 'app-select-muti-module',
  templateUrl: './select-muti-module.component.html',
  styleUrls: ['./select-muti-module.component.scss']
})
export class SelectMutiModuleComponent {
  @Input() optionItems: SelectItem[] = [
    {id: -1, name: ''}
  ];
  @Input() multipe: boolean = true;
  @Output() onChangeSelect = new EventEmitter<any>();
  selectedValues: any;

  onChange(event: any[]) {
  }

  onSelectionChange(selectedItems: any) {
    // debugger;
    if (Array.isArray(selectedItems)) {
      const newList = selectedItems.map((x) => x.id);
      this.selectedValues = [...newList]
      this.onChange([...newList]);
      
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
