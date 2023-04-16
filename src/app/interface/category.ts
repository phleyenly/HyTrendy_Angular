import { Type } from "./type";

export interface Category {
    id: number;
    name: string;
    types: Type[];
}
