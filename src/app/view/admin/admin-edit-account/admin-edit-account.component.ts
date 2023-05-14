import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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


  constructor( 
    private personService: PersonService,
    private route: ActivatedRoute) {}

  async ngOnInit() {
    this.getPersonById(this.idNumber);
  await  this.getRole();

    this.roleSelect = this.role.map(
      (item, index) => ({
        id: index + 1,
        name: item

      })
    );

    setTimeout(() => {
      console.log(this.role)
      console.log(this.roleSelect)
    }, 5000);
  }

  
  getPersonById(id: number) {
    this.personService.getPersonById(id).subscribe((p:Person)=>{
      this.person = p;
    }) 
  }

async  getRole() {
    // this.personService.getRole().subscribe((r: any) => {
    //   this.role = r;
    // })
    this.role = await this.personService.getRole().toPromise()
  }

  updatePersonById() {
    this.personService.updataPersonById(this.idNumber, this.person).subscribe((m: any) => {
      alert(m.message);
    })
  }

  onchageRoleSelect($event: any) {
    this.person.role = $event.name
  }
}
