import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Person } from 'src/app/interface/person';
import { PersonService } from 'src/app/service/person.service';

@Component({
  selector: 'app-admin-edit-account',
  templateUrl: './admin-edit-account.component.html',
  styleUrls: ['./admin-edit-account.component.scss']
})
export class AdminEditAccountComponent  implements OnInit{
  person: Person = {id:-1, name: '', password:'', phone:'', role:'', username:'',address:''};
  id = this.route.snapshot.paramMap.get('id') || '';
  idNumber = parseInt(this.id)


  constructor( 
    private personService: PersonService,
    private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.getPersonById(this.idNumber);
  }

  
  getPersonById(id: number) {
    this.personService.getPersonById(id).subscribe((p:Person)=>{
      this.person = p;
    }) 
  }
}
