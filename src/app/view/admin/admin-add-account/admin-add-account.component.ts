import { Component, OnInit } from '@angular/core';
import { NotifierService } from 'angular-notifier';
import { Person } from 'src/app/interface/person';
import { SelectItem } from 'src/app/interface/select-item';
import { PersonService } from 'src/app/service/person.service';

@Component({
  selector: 'app-admin-add-account',
  templateUrl: './admin-add-account.component.html',
  styleUrls: ['./admin-add-account.component.scss']
})
export class AdminAddAccountComponent implements OnInit {
  person: Person = {id:-1, name: '', password:'', phone:'', role:'', username:'',address:''};
  role: string[] =[];
  roleSelect: SelectItem[]=[];

  constructor( 
    private personService: PersonService,
    private notifier: NotifierService) {}

  async ngOnInit() {
    await this.getRole();

    this.roleSelect = this.role.map(
      (item, index) => ({
        id: index + 1,
        name: item

      })
    );
  }

  async  getRole() {
    this.role = await this.personService.getRole().toPromise()
  }

  createPerson() {
    this.personService.createPerson(this.person).subscribe((m: any) => {
      // alert(m.message);
      this.notifier.notify('success', m.message);

    })
  }

  onchageRoleSelect($event: any) {
    this.person.role = $event.name
  }
}
