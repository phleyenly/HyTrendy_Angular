import { Component, Input } from '@angular/core';
import { Content } from 'src/app/interface/content';

@Component({
  selector: 'app-dropdown-admin',
  templateUrl: './dropdown-admin.component.html',
  styleUrls: ['./dropdown-admin.component.scss']
})
export class DropdownAdminComponent {
  @Input("content") content: Content = {title: "abccffsgsds", selectItem: ["a","b"]};

}
