import { Component, OnInit } from '@angular/core';
import { NotifierService } from 'angular-notifier';
import { CollapseSidebarItem, CollapseSidebarL2Item } from 'src/app/interface/Collapse-Sidear';
import { Category } from 'src/app/interface/category';
import { Content } from 'src/app/interface/content';
import { CategoryService } from 'src/app/service/category.service';
import { PersonService } from 'src/app/service/person.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  status: string[] = [
    "Chờ Xác Nhận" ,
    "Chờ Lấy Hàng" ,
    "Đang Giao Hàng" ,
    "Đã Nhận Hàng" ,
  ];
  role: string[] = [];
  contentRole: Content = { title: "", selectItem: [] };
  categories: Category[] = [];
  productCollapse: CollapseSidebarL2Item[] = [];
  acccountCollapse: CollapseSidebarItem[] = [];
  orderCollapse: CollapseSidebarItem[] = [];

  constructor(
    private personService: PersonService,
    private categoryService: CategoryService,
    private notifier: NotifierService) { }

  async ngOnInit() {
    await this.getRole();
    this.contentRole.title = 'Người Dùng';
    this.contentRole.selectItem = this.role;

    await this.getAllCategory();

    this.productCollapse = this.categories.map(item => {
      return {
        id: item.id, 
        name: item.name,
        link: '?categoryCode=' + item.code,
        items: item.types.map(it => {
          return {
            id: it.id,
            name: it.name,
            link: '&typeCode=' + it.code
          };
        })
      };
    });

    this.acccountCollapse = this.role.map((item, i) => {
      return {
        id: i,
        name: item,
        link: '?role=' + item
      };
    });

    this.orderCollapse = this.status.map((item, i) => {
      return {
        id: i,
        name: item,
        link: '?status=' + item
      };
    });
  }

  async getRole() {
    // this.personService.getRole().subscribe((c: any) => {
    //   this.role = c;

    // })
    const role = await this.personService.getRole().toPromise();// ['Admin','Client']
    this.role.push(...role)
  }


  async getAllCategory() {
    this.categories = await this.categoryService.getAllCategory().toPromise();
  }

  featurePending() {
    this.notifier.notify('warning', 'Tính năng đang đợi phát triển');

  }

}
