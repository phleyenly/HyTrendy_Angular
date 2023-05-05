export interface Product {
    id: number;
    name: string;
    price: number;
    stock: number;
    size: string[];
    tags: string;
    origin: string;
    description: string;
    image: string[];
    material: string;
    categoryId: number;
    typeId: number;
}
