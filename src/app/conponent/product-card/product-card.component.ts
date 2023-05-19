import { Component, Input } from '@angular/core';
import { InforCreateCart } from 'src/app/interface/infor-create-cart';
import { Product } from 'src/app/interface/product';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent {
  @Input("product") product: Product = {id:-1 , name : " ", price: 0, stock:0, size: [], tags: "", origin: "",description: "",image: [] , material: "", categoryId: -1, typeId: -1};
  quantity: number = 1;
  cart: InforCreateCart = {id: -1, quantity: 1, size: 'M'};
  
  constructor( 
    private cartService: CartService) {}

  up() {
    if(this.quantity<10) {
      this.quantity++
    }
    
  }

  down() {
    if(this.quantity>1) {
      this.quantity--
    }
  }

 selectSize(selectedSize: string) {
  this.cart.size = selectedSize;
 }

  createCart() {
    this.cart.id = this.product.id;
    this.cart.quantity= this.quantity;
    this.cartService.createCart(this.cart).subscribe((m: any)=>{
      alert(m.message);
    })
  }
}
