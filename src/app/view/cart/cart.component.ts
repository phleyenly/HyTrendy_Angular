import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { NotifierService } from 'angular-notifier';
import { Cart } from 'src/app/interface/cart';
import { CartService } from 'src/app/service/cart.service';
import { OrderService } from 'src/app/service/order.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit  {
  cart: Cart[] = [];
  sumPrice: number = 0;

  constructor(
    private cartService: CartService,
    private orderService: OrderService,
    private notifier: NotifierService){}

async  ngOnInit() {
  await  this.getCart(); 
  this.totalPrice();
  console.log(this.sumPrice)
    
  

    // setTimeout(() => {
    // this.totalPrice();
    // console.log(this.sumPrice)
    // }, 5000);

    
  }
  

async  getCart() {
   this.cart = await this.cartService.getCart().toPromise()

    // this.cartService.getCart().subscribe((c: Cart[]) =>{
    //   this.cart = c;
    // })
  }

  up(index: number) {
    
    if(this.cart[index].quantity <10) {
       this.cart[index].quantity++
      this.totalPrice()
    }
   
  }

  down(index: number) {
    if(this.cart[index].quantity > 1) {
       this.cart[index].quantity--;
       this.totalPrice()
    }
   
  }

  
  totalPrice() {
    this.sumPrice =0;
    for(let i =0; i<this.cart.length; i++) {
      this.sumPrice =  this.cart[i].price*this.cart[i].quantity + this.sumPrice;
    }
  }


  deleteCartByIdCart(id: number) {
    this.cartService.deleteCartByIdCart(id).subscribe((m: any)=> {
      this.cart = this.cart.filter(item => id !== item.idCart);
      this.totalPrice();
    })
  }

  createOrder() {
    this.orderService.createOrder().subscribe((m:any)=>{
      // alert(m.message);
      this.notifier.notify('success', m.message);
      this.cart = [];
      this.totalPrice();
    })

  }
}
