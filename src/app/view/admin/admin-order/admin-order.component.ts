import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/interface/order';
import { OrderService } from 'src/app/service/order.service';

@Component({
  selector: 'app-admin-order',
  templateUrl: './admin-order.component.html',
  styleUrls: ['./admin-order.component.scss']
})
export class AdminOrderComponent  implements OnInit{
  order: Order[] =[];

  constructor(private orderService: OrderService){}

  ngOnInit(): void {
    this.findAllOrder()

    setTimeout(() => {
      console.log(this.order)
      
    }, 5000);
  }

  findAllOrder() {
    this.orderService.findAllOrder().subscribe((o : Order[]) => {
      this.order = o;
    })
  }

  
  

}
