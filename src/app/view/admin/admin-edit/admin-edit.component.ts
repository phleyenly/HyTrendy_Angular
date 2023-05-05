import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Category } from 'src/app/interface/category';
import { Product } from 'src/app/interface/product';
import { SelectItem } from 'src/app/interface/selectItem';
import { Type } from 'src/app/interface/type';
import { CategoryService } from 'src/app/service/category.service';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-admin-edit',
  templateUrl: './admin-edit.component.html',
  styleUrls: ['./admin-edit.component.scss']
})
export class AdminEditComponent implements OnInit {
  product : Product = {id:-1 , name : "", price: 0, stock:0, size: [], tags: "", origin: "",description: "",image: [] , material: "", categoryId: -1, typeId: -1};
  id = this.route.snapshot.paramMap.get("id") || '';
  size: SelectItem[] = [
    {id: 1, name:"S"}, 
    {id: 2, name:"M"}, 
    {id: 3, name:"L"}, 
    {id: 4, name:"XL"}, 
    {id: 5, name:"XXL"}];
  categories: Category[]= [];
  categoriesSelectItem: SelectItem[] = []
  typesSelectItem: SelectItem[] = []
  
 

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute,
    private categoryService: CategoryService
  ){}

  async ngOnInit() {
    const idNumber = parseInt(this.id);
    this.getById(idNumber);
    await this.getAllCategory();
    this.categoriesSelectItem = this.categories.map((item: Category) => {
      return {id: item.id, name: item.name}
    })


    // setTimeout(() => {
    //   console.log(this.product)
    // }, 5000);
  }

  getById (id: number) {
    this.productService.getById(id).subscribe((p: Product) => {
      this.product = p;
    })
  }

  updateProduct() {
    const idNumber = parseInt(this.id);
    this.productService.updatedById(idNumber, this.product).subscribe((m: any) =>{
      alert(m.message);
    })
  }

  onchangeMultiSelectSize($event: any) {
    console.log($event)
    const size = $event.map((item: SelectItem) => item.name)
    this.product.size = size
  }

  onchangeSelectCategory($event: any) {
    this.product.categoryId = $event.id
    // for (let index = 0; index < this.categories.length; index++) {
    //   if(this.categories[index].id == $event.id) {
    //     const type = this.categories[index].types.map((item: Type) => {
    //       return {
    //         id: item.id,
    //         name: item.name
    //       }
    //     })
    //     this.typesSelectItem = type
    //   }
    // }
    const category = this.categories.find((category) => category.id === $event.id);

    if (category) {
      this.typesSelectItem = category.types.map(({ id, name }) => ({ id, name }));
    }
  }

  onchangeMultiSelectType($event: any) {
    const type = $event[0]
    this.product.typeId = type
  }

  async getAllCategory() {
    this.categories = await this.categoryService.getAllCategory().toPromise()
  }
}
