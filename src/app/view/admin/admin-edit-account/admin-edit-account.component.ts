import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NotifierService } from 'angular-notifier';
import { Person } from 'src/app/interface/person';
import { SelectItem } from 'src/app/interface/select-item';
import { PersonService } from 'src/app/service/person.service';

@Component({
  selector: 'app-admin-edit-account',
  templateUrl: './admin-edit-account.component.html',
  styleUrls: ['./admin-edit-account.component.scss']
})
export class AdminEditAccountComponent  implements OnInit{
  person: Person = {id:-1, name: '', password:'', phone:'', role:'', username:'',address:''};
  id = this.route.snapshot.paramMap.get('id') || '';
  idNumber = parseInt(this.id);
  role: string[] =[];
  roleSelect: SelectItem[]=[];
  roleSelectedId: number | undefined;

  constructor( 
    private personService: PersonService,
    private route: ActivatedRoute,
    private notifier: NotifierService) {}

  async ngOnInit() {
    await this.getPersonById(this.idNumber);
    await this.getRole();

    this.roleSelect = this.role.map(
      (item, index) => ({
        id: index + 1,
        name: item
      })
    );

    this.roleSelectedId = this.roleSelect.find(item => item.name === this.person.role)?.id;
    

    setTimeout(() => {
      console.log(this.role)
      console.log(this.roleSelectedId)
    }, 5000);
  }

  
  async getPersonById(id: number) {
    this.person = await this.personService.getPersonById(id).toPromise();
  }

async  getRole() {
    // this.personService.getRole().subscribe((r: any) => {
    //   this.role = r;
    // })
    this.role = await this.personService.getRole().toPromise()
  }

  updatePersonById() {
    this.personService.updataPersonById(this.idNumber, this.person).subscribe((m: any) => {
      // alert(m.message);
      this.notifier.notify('success', m.message);
    })
  }

  onchageRoleSelect($event: any) {
    this.person.role = $event.name
  }
}
