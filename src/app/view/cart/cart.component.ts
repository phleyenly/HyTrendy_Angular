import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Cart } from 'src/app/interface/cart';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit  {
  cart: Cart[] = [];
  sumPrice: number = 0;

  constructor( private cartService: CartService){}

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

  submit() {
    console.log(this.cart)
  }

  
  totalPrice() {
    this.sumPrice =0;
    for(let i =0; i<this.cart.length; i++) {
      this.sumPrice =  this.cart[i].price*this.cart[i].quantity + this.sumPrice;
    }
  }


  deleteCartByIdProduct(id: number) {
    this.cartService.deleteCartByIdProduct(id).subscribe((m: any)=> {
      this.cart = this.cart.filter(item => id !== item.idProduct);
    })
  }
}
