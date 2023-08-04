import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { ICategory } from 'src/app/models/icategory';
import { PagedCollectionResponse } from 'src/app/models/PagedCollectionResponse';

@Injectable({
  providedIn: 'root'
})
export class ShopService {
  APIURL = environment.APIURL;
  
  constructor(private HttpClient:HttpClient) 
  {
    
  }
  getProducts(categoryId?:number,sort?:string):Observable<PagedCollectionResponse>
  {
   let params = new HttpParams();
    if(categoryId) params = params.append('categoryId', categoryId);
    if(sort) params=params.append('Sort', sort);    
    return this.HttpClient.get<PagedCollectionResponse>(`${this.APIURL}/product/paginate`,{params:params});
  }

  getAllCategories():Observable<ICategory[]>
  {
    return this.HttpClient.get<ICategory[]>(`${this.APIURL}/Category`);
  }
}
