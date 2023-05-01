import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-multi-select',
  templateUrl: './multi-select.component.html',
  styleUrls: ['./multi-select.component.scss']
})
export class MultiSelectComponent {
  @Input() optionItems: any[] = []
  selectedValues: any;

  onChange(event: any[]) {
  }

  onSelectionChange(selectedItems: any[]) {
    // debugger;
    if (Array.isArray(selectedItems)) {
      const newList = selectedItems.map((x) => x.id);
      this.selectedValues = [...newList]
      this.onChange([...newList]);
    }
  }

  onTouched() {}

  private selectAllItems() {
    const newList = this.optionItems.map((x) => x.id);
    this.selectedValues = [...newList];
    this.onChange([...newList]);
  }

  toggleCheckAll(values: any) {
    if (values.currentTarget.checked) {
      this.selectAllItems();
    } else {
      this.unselectAllItems();
    }
  }

  private unselectAllItems() {
    this.selectedValues = [];
    this.onChange([]);
  }
}
