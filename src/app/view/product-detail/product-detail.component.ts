import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Category } from 'src/app/interface/category';
import { InforCreateCart } from 'src/app/interface/infor-create-cart';
import { Product } from 'src/app/interface/product';
import { CartService } from 'src/app/service/cart.service';
import { CategoryService } from 'src/app/service/category.service';
import { ProductService } from 'src/app/service/product.service';
import { TypeService } from 'src/app/service/type.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  product : Product = {id:-1 , name : " ", price: 0, stock:0, size: [], tags: "", origin: "",description: "",image: [] , material: "", categoryId: -1, typeId: -1};
  title: string[] = [];
  category: Category = {id: 0, name: '', code:'', types:[]};
  types: string = "";
  categoryCode = this.route.snapshot.queryParamMap.get('categoryCode') || '';
  typeCode = this.route.snapshot.queryParamMap.get('typeCode') || '';
  quantity: number = 1;
  cart: InforCreateCart = {id: -1, quantity: 1, size: 'M'};

  constructor(
    private productService: ProductService,
    private typeService: TypeService,
    private categoryService: CategoryService,
    private route: ActivatedRoute,
    private cartService: CartService
){}
  async ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id') ;
    const idd = id || '';
    const numberId = parseInt(idd);
    this.getById(numberId);
    this.title.push("Tất cả sản phẩm");
    if(this.categoryCode !== '' && this.typeCode !== '') {
      console.log(this.categoryCode)
      await this.getCategoryByCode(this.categoryCode);
      await this.getTypeByCode(this.categoryCode, this.typeCode);
      this.title.push(this.category.name);
      this.title.push(this.types);
    }
      
    

    setTimeout(() => {
      console.log(this.product);
      console.log(this.typeCode);
      console.log(this.title);
      
      
    }, 5000);
  }

  getById( id: number) {
    this.productService.getById(id).subscribe((p: Product)=>{
      this.product = p;
      
    })
  }

  async getCategoryByCode(categoryCode: string) {
    this.category = await this.categoryService.getCategoryByCode(categoryCode).toPromise();
  }

  async getTypeByCode(categoryCode: string, typeCode: string) {
    this.types = await this.typeService.getTypeByCode(categoryCode, typeCode).toPromise();
  }

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

  selectSize(size: string)  {
    this.cart.size = size;
  }

  createCart() {
    this.cart.id = this.product.id;
    this.cart.quantity = this.quantity;
    this.cartService.createCart(this.cart).subscribe((m: any) => {
      alert(m.message)
    })
  }

}
