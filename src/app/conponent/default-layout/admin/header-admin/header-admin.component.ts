import { Component, OnInit } from '@angular/core';
import { Person } from 'src/app/interface/person';
import { PersonService } from 'src/app/service/person.service';

@Component({
  selector: 'app-header-admin',
  templateUrl: './header-admin.component.html',
  styleUrls: ['./header-admin.component.scss']
})
export class HeaderAdminComponent  implements OnInit{

  person: Person = {id:-1, name: '', password:'', phone:'', role:'', username:'',address:''};

  constructor(
    private personService: PersonService,
    ){}

  ngOnInit(): void {
    this.getUser();
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
