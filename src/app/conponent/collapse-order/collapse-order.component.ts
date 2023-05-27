import { Component, Input, OnInit, TemplateRef } from '@angular/core';
import { Order } from 'src/app/interface/order';

import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { SelectItem } from 'src/app/interface/select-item';


@Component({
  selector: 'app-collapse-order',
  templateUrl: './collapse-order.component.html',
  styleUrls: ['./collapse-order.component.scss']
})
export class CollapseOrderComponent  implements OnInit{
  
  @Input("order") order: Order = {id: -1, status: "", date: new Date(), products: [], person: {id:-1, name: '', password:'', phone:'', role:'', username:'',address:''}}

  isOpen: boolean = false;

  quantityProduct: number = 0;

  summ : number = 0;

  button: string = '';

  modalRef?: BsModalRef;

  listStatus: SelectItem[] = [
    {id: 1 , name: "Chờ Xác Nhận" },
    {id: 2 , name: "Chờ Lấy Hàng" },
    {id: 3 , name: "Đang Giao Hàng" },
    {id: 4 , name: "Đã Nhận Hàng" },
  ];
  constructor(private modalService: BsModalService) {}

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  ngOnInit(): void {

    this.quantityProduct = this.order.products.length;
    this.totalPrice();
    this.changeColorStatus();


    setTimeout(() => {
      
      console.log(this.order)
    }, 5000);
      
    }

  
  totalPrice() {
     const products = this.order.products;
    for( let p of products) {
      this.summ = p.quantity*p.price + this.summ
    }
      
  }

  changeColorStatus() {
    switch (this.order.status) {
      case "Chờ Xác Nhận":
        this.button = "btn btn-outline-danger"
        break;

        case "Chờ Lấy Hàng":
          this.button = "btn btn-outline-primary"
          break;

        case "Đang Giao Hàng":
          this.button = "btn btn-outline-warning"
          break;

        case "Đã Nhận Hàng":
          this.button = "btn btn-outline-success"
          break;
    
    }
  }
  
}
