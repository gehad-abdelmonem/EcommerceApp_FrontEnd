import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Basket, IBasket, IBasketItem, basketTotal } from '../core/models/basket';
import { IProduct } from '../core/models/IProduct';
import { ICategory } from '../core/models/icategory';

@Injectable({
  providedIn: 'root'
})
export class BasketService {
  APIURL = environment.APIURL;
  private basketSource=new BehaviorSubject<Basket|null>(null);
  private basketTotalSource = new BehaviorSubject<basketTotal|null>(null);
  basketTotalSource$ = this.basketTotalSource.asObservable();
  basketSource$=this.basketSource.asObservable();
  constructor(private httpClient:HttpClient) {
  
   }
   getBasket(basketId:string)
   {
    return this.httpClient.get<Basket>(`${this.APIURL}/Basket?id=${basketId}`).subscribe({
      next:basket=>{
        this.basketSource.next(basket);
        this.calculateTotals();
      },
      error:err=>console.log(err)
    })
   }

   setbasket(basket:Basket)
   {
    return this.httpClient.post<Basket>(`${this.APIURL}/Basket`,basket).subscribe({
      next:basket=>{
        this.basketSource.next(basket);
        this.calculateTotals();
      },
      error:err=>console.log(err)
    });
   }

   getCurrentBasketValue()
   {
    return this.basketSource.value;
   }
   addItemToBasket(item:IProduct|IBasketItem,quantity:number=1)
   {
    if(this.isProduct(item)) item = this.mapProductItemToBasketItem(item as IProduct)
    const basket = this.getCurrentBasketValue()??this.createBasket();
    basket.items = this.addOrUpdate(basket.items,item as IBasketItem,quantity);
    this.setbasket(basket);

   }
   addOrUpdate(basketItems:IBasketItem[],itemToAdd:IBasketItem,quantity:number):IBasketItem[]
   {
    const item = basketItems.find(x=>x.id==itemToAdd.id);
    if(item)
    {
     item.quentity+=quantity;
    }
    else
    {
      itemToAdd.quentity = quantity;
      basketItems.push(itemToAdd);
    }
    return basketItems;

   }
  createBasket():Basket {
    const basket = new Basket();
    localStorage.setItem("basketId",basket.id);
    return basket;
  }
 private mapProductItemToBasketItem(item: IProduct):IBasketItem {
   return{
    id: item.id,
    productName:item.name,
    price:item.price,
    quentity:0,
    picUrl:item.pictureUrl,
    category:item.category.name
   }
  }
  private calculateTotals()
  {
    const basket = this.getCurrentBasketValue();
    if(!basket) return;
    const subTotal = basket?.items.reduce((sum,item)=>sum+item.quentity*item.price,0)
    const shipping =0;
    const total = subTotal+shipping;
    this.basketTotalSource.next({shipping:shipping,subTotal:subTotal,total:total})
  }
  private isProduct(item:IProduct|IBasketItem)
  {
    return (typeof item.category!=="string" )
  }
  removeItemFromBasket(id:number,quantity:number=1)
  {
    const basket =this.getCurrentBasketValue();
    if(!basket) return;
    const item = basket.items.find(x=>x.id==id);
    if(item) {
      item.quentity -= quantity;
      if(item.quentity===0)
      {
        basket.items= basket.items.filter(x=>x.id!==item.id)
      }
      if(basket.items.length>0) this.setbasket(basket);
      else
      {
        this.deleteBasket(basket);
      }

   
  }

} 
 deleteBasket(basket:Basket) {
   return this.httpClient.delete(`${this.APIURL}/Basket?id=${basket.id}`).subscribe({
    next:()=>{
      this.basketSource.next(null);
      this.basketTotalSource.next(null);
      localStorage.removeItem("basketId");

    }
   })
  }
}
