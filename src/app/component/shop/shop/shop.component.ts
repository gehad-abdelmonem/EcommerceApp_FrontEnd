import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../../services/product.service';
import { IProduct } from 'src/app/models/IProduct';
import { ICategory } from 'src/app/models/icategory';
import { ShopService } from '../shop.service';
import { Ripple,initTE,} from "tw-elements";
@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css'],
})
export class ShopComponent implements OnInit {
  categories: ICategory[] = [];
  productList: IProduct[] = [];
  selectedCategory = 0;
  selectedSort= "name";
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
    this.shopService.getProducts(this.selectedCategory,this.selectedSort).subscribe({
      next: (resp) => {
        this.productList = resp.data;
        console.log(resp.data);
        console.log(this.selectedCategory);
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
    this.selectedCategory = categoryId;
    this.getProducts();
  }
  onSelectedSort(sort:string){
    this.selectedSort = sort;
    this.getProducts();
  }
}
