import { Component, OnInit, TemplateRef } from '@angular/core';
import { Person } from 'src/app/interface/person';
import { PersonService } from 'src/app/service/person.service';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Order } from 'src/app/interface/order';
import { OrderService } from 'src/app/service/order.service';
import { NotifierService } from 'angular-notifier';
import { ChangePasswordData } from 'src/app/interface/change-password-data';

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
  check7: string = '';
  person: Person = {id:-1, name: '', password:'', phone:'', role:'', username:'',address:''};
  order: Order[] =[];
  passwordData: ChangePasswordData = {oldPassword: '', newPassword: '', confirmPassword: ''}

  modalRef?: BsModalRef;
  password: string = ''

  constructor(
    private personService: PersonService,
    private modalService: BsModalService,
    private orderService: OrderService,
    private notifier: NotifierService
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
      // alert(m.message)
      this.notifier.notify('success', m.message);
    })
  }

  changePassword() {
    this.personService.changePassword(this.passwordData).subscribe((m:any) => {
      // this.notifier.notify('success', m.message);
      if(m.message === "Thay đổi Mật Khẩu Thành Công") {
        this.notifier.notify('success', m.message);
      } else {
        this.notifier.notify('error', m.message);
      }
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
          // alert(n.message);
          this.notifier.notify('success', n.message);
          this.findPersonByUsername()
        })
      } else {
        // alert(m.message);
        this.notifier.notify('error', m.message);

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
    this.check7 = '';
  }

  isOpen2() {
    this.check1 = "";
    this.check2 = 'active show';
    this.check3 = '';
    this.check4 = '';
    this.check5 = '';
    this.check6 = '';
    this.check7 = '';
  }

  isOpen3() {
    this.check1 = "";
    this.check2 = '';
    this.check3 = 'active show';
    this.check4 = '';
    this.check5 = '';
    this.check6 = '';
    this.check7 = '';
  }

  isOpen4() {
    this.check1 = "";
    this.check2 = '';
    this.check3 = '';
    this.check4 = 'active show';
    this.check5 = '';
    this.check6 = '';
    this.check7 = '';
  }

  isOpen5() {
    this.check1 = "";
    this.check2 = '';
    this.check3 = '';
    this.check4 = '';
    this.check5 = 'active show';
    this.check6 = '';
    this.check7 = '';
  }

  isOpen6() {
    this.check1 = "";
    this.check2 = '';
    this.check3 = '';
    this.check4 = '';
    this.check5 = '';
    this.check6 = 'active show';
    this.check7 = '';
  }

  isOpen7() {
    this.check1 = "";
    this.check2 = '';
    this.check3 = '';
    this.check4 = '';
    this.check5 = '';
    this.check6 = '';
    this.check7 = 'active show';
    sessionStorage.clear();
    window.location.href = '/login'
  }

}
