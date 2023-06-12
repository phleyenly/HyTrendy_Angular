import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NotifierService } from 'angular-notifier';
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
    private route: ActivatedRoute,
    private notifier: NotifierService
    ) {}

  ngOnInit(): void {
    if(this.role === '' || this.role==='Tất cả người dùng') {
      this.getAllPerson();
    } else {
       this.getPersonByRole(this.role);
    }
    
   
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
  
  deleteById(id: number) {
    this.personService.deleteById(id).subscribe((m:any)=> {
      // alert(m.message);
      this.notifier.notify('error', m.message);
      setTimeout(() => {
        location.reload();
      }, 2000);
      
    })
  }
}
