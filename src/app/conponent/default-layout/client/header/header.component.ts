import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/interface/category';
import { Person } from 'src/app/interface/person';
import { CategoryService } from 'src/app/service/category.service';
import { PersonService } from 'src/app/service/person.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent  implements OnInit{
  categories: Category[]= [];
  session = sessionStorage.getItem('token');
  person: Person = {id:-1, name: '', password:'', phone:'', role:'', username:'',address:''};
  constructor(
    private categoryService: CategoryService,
    private personService: PersonService
    ){}

  ngOnInit(): void {
    this.getAllCategory();
    this.getUser();
  }

  getAllCategory(): any{
    this.categoryService.getAllCategory().subscribe((c: any) => {
      this.categories = c;
    
    })
  }

  logout() {
    sessionStorage.clear();
    window.location.href = '/login'
  }

  getUser() {
    this.personService.findPersonByUsername().subscribe((p: Person) => {
      this.person = p;
    })
  }
}
