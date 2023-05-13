import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Person } from 'src/app/interface/person';
import { PersonService } from 'src/app/service/person.service';

@Component({
  selector: 'app-admin-account',
  templateUrl: './admin-account.component.html',
  styleUrls: ['./admin-account.component.scss']
})
export class AdminAccountComponent implements OnInit{ 
  persons: Person[] = [];
  role = this.route.snapshot.queryParamMap.get("role") || '';


  constructor( 
    private personService: PersonService,
    private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.getAllPerson();
    this.getPersonByRole(this.role);
  }

  getAllPerson() {
    this.personService.getAllPerson().subscribe((p: Person[]) => {
      this.persons = p;
    })
  }

  getPersonByRole(role: string) {
    this.personService.getPersonByRole(role).subscribe((p:Person[]) => {
      this.persons = p;
    })
  }

}
