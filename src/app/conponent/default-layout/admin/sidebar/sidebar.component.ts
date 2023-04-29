import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/interface/category';
import { Content } from 'src/app/interface/content';
import { CategoryService } from 'src/app/service/category.service';
import { PersonService } from 'src/app/service/person.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit{
  
  role: string[] =[];
  contentRole: Content = {title: "", selectItem: []};
  categories: Category[]= [];
  constructor(private personService: PersonService,
    private categoryService: CategoryService ){}

 async ngOnInit() {
   await this.getRole();
    this.contentRole.title = 'Người Dùng';
    this.contentRole.selectItem = this.role;

    this.getAllCategory();
    
    


    setTimeout(() => {
      console.log(this.role);
      console.log(this.contentRole);
      console.log(this.categories);

      
    }, 5000);
      
    }

 async getRole() {
    // this.personService.getRole().subscribe((c: any) => {
    //   this.role = c;

    // })
    this.role = await this.personService.getRole().toPromise();

  }


  getAllCategory(): any{
    this.categoryService.getAllCategory().subscribe((c: any) => {
      this.categories = c;
    
     })
  }

}
