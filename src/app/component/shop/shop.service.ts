import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { ICategory } from 'src/app/models/icategory';
import { PagedCollectionResponse } from 'src/app/models/PagedCollectionResponse';
import { shopParams } from 'src/app/models/shopParams';
import { IProduct } from 'src/app/models/IProduct';

@Injectable({
  providedIn: 'root'
})
export class ShopService {
  APIURL = environment.APIURL;
  
  constructor(private HttpClient:HttpClient) 
  {
    
  }
  getProducts(shopParams:shopParams):Observable<PagedCollectionResponse>
  {
   let params = new HttpParams();
    if(shopParams.categoryId>0) params = params.append('categoryId', shopParams.categoryId);
    params=params.append('Sort', shopParams.sort);  
    params = params.append('PageNumber', shopParams.pageNumber);  
    params = params.append('PageSize', shopParams.pageSize);
    if(shopParams.search) params = params.append('Search', shopParams.search)
    return this.HttpClient.get<PagedCollectionResponse>(`${this.APIURL}/product/paginate`,{params:params});
  }

  getAllCategories():Observable<ICategory[]>
  {
    return this.HttpClient.get<ICategory[]>(`${this.APIURL}/Category`);
  }
  getProductById(id:number)
  {
    return this.HttpClient.get<IProduct>(`${this.APIURL}/Product/${id}`);
  }
  getRelatedProducts(categoryId:number,productId:number)
  {
    return this.HttpClient.get<IProduct[]>(`${this.APIURL}/Product/related/${categoryId}/${productId}/8`)
  }
}
