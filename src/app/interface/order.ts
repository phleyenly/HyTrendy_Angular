import { Person } from "./person";
import { Product } from "./product";
import { ProductOrder } from "./product-order";

export interface Order {
     id: number;
	
	 status: string;
	
	 date: Date;
	
	 products: ProductOrder[];
	
	 person: Person;

}
