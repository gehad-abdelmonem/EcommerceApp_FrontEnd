import { IProduct } from "./IProduct";

export interface PagedCollectionResponse
{
    pageNumber:number,
    pageSize:number,
    count:number,
    data:IProduct[]
}