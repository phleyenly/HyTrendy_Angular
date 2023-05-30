import { Component, OnInit } from '@angular/core';
import { Person } from 'src/app/interface/person';
import { PersonService } from 'src/app/service/person.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {

  //  isOpen: boolean = false;

  check1: string = '';
  check2: string = '';
  check3: string = '';
  check4: string = '';
  check5: string = '';
  check6: string = '';
  person: Person = {id:-1, name: '', password:'', phone:'', role:'', username:'',address:''};

  constructor(
    private personService: PersonService,
  ){}

   ngOnInit(): void {
    this.isOpen1();
    this.findPersonByUsername()

  }

  findPersonByUsername() {
    this.personService.findPersonByUsername().subscribe((p: Person) => {
      this.person = p

    })
  }

  isOpen1() {
    this.check1 = "active show";
    this.check2 = '';
    this.check3 = '';
    this.check4 = '';
    this.check5 = '';
    this.check6 = '';
  }

  isOpen2() {
    this.check1 = "";
    this.check2 = 'active show';
    this.check3 = '';
    this.check4 = '';
    this.check5 = '';
    this.check6 = '';
  }

  isOpen3() {
    this.check1 = "";
    this.check2 = '';
    this.check3 = 'active show';
    this.check4 = '';
    this.check5 = '';
    this.check6 = '';
  }

  isOpen4() {
    this.check1 = "";
    this.check2 = '';
    this.check3 = '';
    this.check4 = 'active show';
    this.check5 = '';
    this.check6 = '';
  }

  isOpen5() {
    this.check1 = "";
    this.check2 = '';
    this.check3 = '';
    this.check4 = '';
    this.check5 = 'active show';
    this.check6 = '';
  }

  isOpen6() {
    this.check1 = "";
    this.check2 = '';
    this.check3 = '';
    this.check4 = '';
    this.check5 = '';
    this.check6 = 'active show';
  }

}
