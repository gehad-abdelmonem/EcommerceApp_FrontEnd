import * as cuid from 'cuid';

export interface IBasketItem {
  id: number;
  productName: string;
  price: number;
  quentity: number;
  picUrl: string;
  category: string;
}
export interface IBasket {
  //mapping to customer basket
  id: string;
  items: IBasketItem[];
}

export class Basket implements IBasket {
  id: string = cuid();
  items: IBasketItem[] = [];
}

export interface basketTotal{
   shipping:number,
   subTotal: number,
   total:number
}