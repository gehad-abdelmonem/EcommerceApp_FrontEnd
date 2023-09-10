import { ICategory } from "./icategory";

export interface IProduct{
    id:number,
    name:string,
    description:string,
    price:number,
    pictureUrl:string,
    category:ICategory
}