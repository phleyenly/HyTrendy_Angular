import { Component, OnInit } from '@angular/core';
import { Person } from 'src/app/interface/person';
import { PersonService } from 'src/app/service/person.service';

@Component({
  selector: 'app-admin-account',
  templateUrl: './admin-account.component.html',
  styleUrls: ['./admin-account.component.scss']
})
export class AdminAccountComponent implements OnInit{ 
  persons: Person[] = [];

  constructor( private personService: PersonService) {}

  ngOnInit(): void {
    this.getAllPerson();
  }

  getAllPerson() {
    this.personService.getAllPerson().subscribe((p: Person[]) => {
      this.persons = p;
    })
  }

}
