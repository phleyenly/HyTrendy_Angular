import { Component, OnInit } from '@angular/core';
import { Content } from 'src/app/interface/content';
import { PersonService } from 'src/app/service/person.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit{
  
  role: string[] =[];
  contentRole: Content = {title: "", selectItem: []}
  constructor(private personService: PersonService ){}

 async ngOnInit() {
   await this.getRole();
    this.contentRole.title = 'Người Dùng';
    this.contentRole.selectItem = this.role;


    setTimeout(() => {
      console.log(this.role);
      console.log(this.contentRole)

      
    }, 5000);
      
    }

 async getRole() {
    // this.personService.getRole().subscribe((c: any) => {
    //   this.role = c;

    // })
    this.role = await this.personService.getRole().toPromise();

  }
}
