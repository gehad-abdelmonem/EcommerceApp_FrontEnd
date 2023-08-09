import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../../services/product.service';
import { IProduct } from 'src/app/models/IProduct';
import { ICategory } from 'src/app/models/icategory';
import { ShopService } from '../shop.service';
import { Ripple,initTE,} from "tw-elements";
import { shopParams } from 'src/app/models/shopParams';
@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css'],
})
export class ShopComponent implements OnInit {
  categories: ICategory[] = [];
  productList: IProduct[] = [];
  shopParams:shopParams = new shopParams();
  totalCount:number = 0;
  sortOptions = [
    {name:"Alphapitical",value:"name"},
    {name:"Price : Low To High",value:"priceAsc"},
    {name:"Price : High To Low",value:"priceDes"}
  ]
  constructor(private shopService: ShopService) {}

  ngOnInit(): void {
    initTE({ Ripple });
    this.getAllCategories();
    this.getProducts();
  }
  getProducts() {
    this.shopService.getProducts(this.shopParams).subscribe({
      next: (resp) => {
        this.productList = resp.data as IProduct[];
        this.totalCount = resp.count;
        console.log(resp.data);
      },
      error:er=>{
        console.log(er);
      }
    });
  }
  getAllCategories() {
    this.shopService.getAllCategories().subscribe((data) => {
      this.categories = [{ id: 0, name: 'All Categories' }, ...data];
    });
  }
  onSelectedCategory(categoryId: number) {
    this.shopParams.categoryId = categoryId;
    this.getProducts();
  }
  onSelectedSort(sort:string){
    this.shopParams.sort = sort;
    this.getProducts();
  }

  onPageChange(event:any) {
    this.shopParams.pageNumber = event;
    this.getProducts();
  }
}
