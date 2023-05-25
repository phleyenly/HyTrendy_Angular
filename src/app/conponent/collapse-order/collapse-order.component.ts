import { Component, Input, OnInit } from '@angular/core';
import { Order } from 'src/app/interface/order';

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
