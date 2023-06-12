import { Component, Input, OnInit, TemplateRef } from '@angular/core';
import { Order } from 'src/app/interface/order';

import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { SelectItem } from 'src/app/interface/select-item';
import { OrderService } from 'src/app/service/order.service';
import { NotifierService } from 'angular-notifier';


@Component({
  selector: 'app-collapse-order',
  templateUrl: './collapse-order.component.html',
  styleUrls: ['./collapse-order.component.scss']
})
export class CollapseOrderComponent  implements OnInit{
  
  @Input("order") order: Order = {id: -1, status: "", date: new Date(), products: [], person: {id:-1, name: '', password:'', phone:'', role:'', username:'',address:''}}
  
  @Input("role") role: string = '';
  
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

  idStatus : number = -1;
  constructor(
    private modalService: BsModalService,
    private orderService: OrderService,
    private notifier: NotifierService) {}

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  ngOnInit(): void {

    this.quantityProduct = this.order.products.length;
    this.totalPrice();
    this.changeColorStatus();
    this.checkIdStatus();
    


    setTimeout(() => {
      
      console.log(this.order)
    }, 5000);
      
    }

  checkIdStatus() {
    for(let item of this.listStatus) {
      if(this.order.status === item.name) {
        this.idStatus = item.id;
      }
    }
  
  }

  
  updateStatusOrderById(id: number, status: string) {
    this.orderService.updateStatusOrderById(id, status).subscribe((m: any) => {
      // alert(m.message);
      this.notifier.notify('success', m.message);
      setTimeout(() => {
        location.reload();
      }, 2000);
      
    }) 
  }

  update() {
    this.updateStatusOrderById(this.order.id, this.order.status);
  }

  deleteOrderById(id: number) { 
    if(this.role === "ADMIN") {
      this.orderService.deleteOrderById(id).subscribe((m:any)=> {
      // alert(m.message);
      this.notifier.notify('success', m.message);
      setTimeout(() => {
         location.reload();
      }, 2000);
     
      })
    } else if (this.role === "CLIENT") {
      if(this.order.status === "Chờ Xác Nhận") {
        this.orderService.deleteOrderById(id).subscribe((m:any)=> {
          // alert(m.message);
          this.notifier.notify('success', m.message);
          setTimeout(() => {
            location.reload();
         }, 2000);
        })
      } else {
        // alert("Đơn hàng này không thể hủy")
        this.notifier.notify('success', 'Đơn hàng này không thể hủy');

      }
    }
    
    


    }
    


  

  onchangeStatusSelectct($event: any) {
    this.order.status = $event.name;
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
