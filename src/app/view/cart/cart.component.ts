import { Component, OnInit } from '@angular/core';
import { Cart } from 'src/app/interface/cart';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  cart: Cart[] = [];

  constructor( private cartService: CartService){}

  ngOnInit(): void {
    this.getCart();

    setTimeout(() => {
      console.log(this.cart[0].quantity)
    }, 5000);
  }

  getCart() {
    this.cartService.getCart().subscribe((c: Cart[]) =>{
      this.cart = c;
    })
  }

  up(index: number) {
    
    if(this.cart[index].quantity <10) {
       this.cart[index].quantity++
    }
   
  }

  down(index: number) {
    if(this.cart[index].quantity > 1) {
       this.cart[index].quantity--;
    }
   
  }

}
