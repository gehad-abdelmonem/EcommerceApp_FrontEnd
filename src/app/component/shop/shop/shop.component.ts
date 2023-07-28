import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../../services/product.service';
import { IProduct } from 'src/app/models/IProduct';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {
  productList:IProduct[] = [];
  constructor(private ProductService:ProductService)
  {

  }
  ngOnInit(): void {
    this.ProductService.getAll().subscribe({
      next:(data)=>
      {
        this.productList = data;
        console.log(this.productList);
      },
      error:(err)=>console.log(err)
    })
  }

}
