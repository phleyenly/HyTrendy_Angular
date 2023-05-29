import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { async } from 'rxjs';
import { Category } from 'src/app/interface/category';
import { Product } from 'src/app/interface/product';
import { SelectItem } from 'src/app/interface/select-item';
import { CategoryService } from 'src/app/service/category.service';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-admin-edit',
  templateUrl: './admin-edit.component.html',
  styleUrls: ['./admin-edit.component.scss']
})
export class AdminEditComponent implements OnInit {
  product : Product = {id:-1 , name : "", price: 0, stock:0, size: [], tags: "", origin: "",description: "",image: [] , material: "" , categoryId: -1, typeId: -1};
  id = this.route.snapshot.paramMap.get("id") || '';
  size: SelectItem[] = [
    {id: 1 , name: "S" },
    {id: 2 , name: "M" },
    {id: 3 , name: "L" },
    {id: 4 , name: "XL" },
    {id: 5 , name: "XXL" },
  ];
  categories: Category[]= [];
  categorySelect: SelectItem[] = [];
  typeSelect: SelectItem[] = [];
  SizeProduct: number[] = [];
  
 

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute,
    private categoryService: CategoryService
  ){}

  async ngOnInit() {
    const idNumber = parseInt(this.id);
   await this.getById(idNumber);
    await this.getAllCategory()
    this.categorySelect = this.categories.map((item: Category) => {
      return {id: item.id, name: item.name}
    })
   
    // for (let index = 0; index < this.size.length; index++) {
    //   for (let i = 0; i < this.product.size.length; i++) {
    //     if(this.size[index].name === this.product.size[i]) {
    //       this.SizeProduct.push(index +1)
    //     }
        
    //   }
      
    // }
    this.SizeProduct = this.product.size.map(size => {
      return this.size.findIndex(s => s.name === size ) +1 
    })

   
  }

  async getById (id: number) {
   this.product = await this.productService.getById(id).toPromise()
  }

  updateProduct() {
    const idNumber = parseInt(this.id);
    // console.log(this.product)
    this.productService.updatedById(idNumber, this.product).subscribe((m: any) =>{
      alert(m.message);
    })
  }

  onchangeMultiSelect($event: any) {
    if(Array.isArray($event)) {
      const size = $event.map((item: SelectItem) => item.name)
      this.product.size = size
    }
  }

  onchangeCategorySelect($event: any) {
  this.product.categoryId = $event.id;
  const category = this.categories.find((category)=> category.id === $event.id);
  if(category) {
    this.typeSelect = category.types.map(({id, name}) => ({id, name}));
  }
   
  }

  onchageTypeSelect($event: any) {
    this.product.typeId = $event.id
  }

  async getAllCategory() {
   this.categories = await this.categoryService.getAllCategory().toPromise()
  }

}
