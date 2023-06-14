import { Component, Input } from '@angular/core';
import { CollapseSidebarL2Item } from 'src/app/interface/Collapse-Sidear';

@Component({
  selector: 'app-collapse-sidebar-lv2',
  templateUrl: './collapse-sidebar-lv2.component.html',
  styleUrls: ['./collapse-sidebar-lv2.component.scss']
})
export class CollapseSidebarLv2Component {
  @Input("icon") icon: string = '';
  @Input("id") id: number = 0;
  @Input("title") title: string = '';
  @Input("collapseSidebarL2") collapseSidebarL2: CollapseSidebarL2Item[] = [];
  isCollapsed = true;
  iconExpand = 'fa fa-angle-down'

  onExpand() {
    this.isCollapsed = !this.isCollapsed
    this.iconExpand = (this.iconExpand === 'fa fa-angle-down') ? 'fa fa-angle-left' : 'fa fa-angle-down';
  }
}
