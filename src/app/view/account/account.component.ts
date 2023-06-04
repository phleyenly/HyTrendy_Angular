import { Component, OnInit, TemplateRef } from '@angular/core';
import { Person } from 'src/app/interface/person';
import { PersonService } from 'src/app/service/person.service';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Order } from 'src/app/interface/order';
import { OrderService } from 'src/app/service/order.service';

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
  order: Order[] =[];

  modalRef?: BsModalRef;
  password: string = ''

  constructor(
    private personService: PersonService,
    private modalService: BsModalService,
    private orderService: OrderService,
  ){}

   ngOnInit(): void {
    this.isOpen1();
    this.findPersonByUsername();
    this.findOrderOfUser();

  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  checkPassword() {
    this.personService.checkPassword(this.password).subscribe((m: any) => {
      alert(m.message)
    })
  }

  findPersonByUsername() {
    this.personService.findPersonByUsername().subscribe((p: Person) => {
      this.person = p

    })
  }

  updatePerson() {
    this.personService.checkPassword(this.password).subscribe((m: any) => {
      if(m.message ==="OK") {
        this.modalRef?.hide();
        this.personService.updataPersonById(this.person.id, this.person).subscribe((n: any) => {
          alert(n.message);
          this.findPersonByUsername()
        })
      } else {
        alert(m.message);
      }
    })
    this.password = '';
  }

  cancel() {
    // location.reload();
    this.findPersonByUsername();
  }

  findOrderOfUser() {
    this.orderService.findOrderOfUser().subscribe((o: Order[]) => {
      this.order = o;
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
