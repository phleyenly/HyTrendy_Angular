import { Component, Input } from '@angular/core';
import { CollapseSidebarItem } from 'src/app/interface/Collapse-Sidear';

@Component({
  selector: 'app-collapse-sidebar',
  templateUrl: './collapse-sidebar.component.html',
  styleUrls: ['./collapse-sidebar.component.scss']
})
export class CollapseSidebarComponent {
  @Input("hasAll") hasAll: boolean = false;
  @Input("hasAdd") hasAdd: boolean = false;
  @Input("icon") icon: string = '';
  @Input("id") id: number = 0;
  @Input("title") title: string = '';
  @Input("collapseSidebar") collapseSidebar: CollapseSidebarItem[] = [];
  @Input("baseLink") baseLink = '';
  isCollapsed = true;
  iconExpand = 'fa fa-angle-down'

  onExpand() {
    this.isCollapsed = !this.isCollapsed
    this.iconExpand = (this.iconExpand === 'fa fa-angle-down') ? 'fa fa-angle-left' : 'fa fa-angle-down';
  }
}
