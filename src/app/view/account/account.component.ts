import { Component, OnInit } from '@angular/core';

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

   ngOnInit(): void {
    this.isOpen1()
  }

  isOpen1() {
    this.check1 = "active show";
    this.check2 = '';
    this.check3 = '';
    this.check4 = '';
    this.check5 = '';
  }

  isOpen2() {
    this.check1 = "";
    this.check2 = 'active show';
    this.check3 = '';
    this.check4 = '';
    this.check5 = '';
  }

  isOpen3() {
    this.check1 = "";
    this.check2 = '';
    this.check3 = 'active show';
    this.check4 = '';
    this.check5 = '';
  }

  isOpen4() {
    this.check1 = "";
    this.check2 = '';
    this.check3 = '';
    this.check4 = 'active show';
    this.check5 = '';
  }

  isOpen5() {
    this.check1 = "";
    this.check2 = '';
    this.check3 = '';
    this.check4 = '';
    this.check5 = 'active show';
  }

}
