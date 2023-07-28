import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IProduct } from '../models/IProduct';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
APIURL = environment.APIURL;
  constructor(private htppClient:HttpClient) { }
  
  getAll(): Observable<IProduct[]> 
  {
    return this.htppClient.get<IProduct[]>(`${this.APIURL}/product`)
  }
}
