import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/interface/product';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-admin-edit',
  templateUrl: './admin-edit.component.html',
  styleUrls: ['./admin-edit.component.scss']
})
export class AdminEditComponent implements OnInit {
  product : Product = {id:-1 , name : " ", price: 0, stock:0, size: [], tags: "", origin: "",description: "",image: [] , material: ""};
  id = this.route.snapshot.paramMap.get("id") || '';
 

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute,
  ){}

  ngOnInit(): void {
    const idNumber = parseInt(this.id);
    this.getById(idNumber);
  }

  getById (id: number) {
    this.productService.getById(id).subscribe((p: Product) => {
      this.product = p;
    })
  }

}
