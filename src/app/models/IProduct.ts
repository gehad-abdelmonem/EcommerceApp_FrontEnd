import { ICategory } from "./icategory";

export interface IProduct{
    Id:number,
    Name:string,
    Description:string,
    Price:number,
    category:ICategory
}