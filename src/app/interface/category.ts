import { Type } from "./type";

export interface Category {
    id: number;
    name: string;
    code: string;
    types: Type[];
}
