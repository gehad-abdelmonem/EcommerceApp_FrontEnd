import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProduct } from 'src/app/component/core/models/IProduct';
import { ShopService } from '../shop.service';
import { BasketService } from '../../basket/basket.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent implements OnInit {
  product: any;
  count: number = 1;
  relatedProducts: IProduct[] = [];
  constructor(
    private activatedRoute: ActivatedRoute,
    private shopService: ShopService,
    private basketService: BasketService
  ) {}
  ngOnInit(): void {
    this.loadProduct();
  }
  loadProduct() {
    this.activatedRoute.paramMap.subscribe((param) => {
      const selectedId = Number(param.get('id'));
      this.shopService.getProductById(selectedId).subscribe({
        next: (product) => {
          this.product = product;
          console.log(this.product);
          window.scrollTo({ top: 100, left: 100, behavior: 'smooth' });
          this.GetRelatedProducts();
        },
        error: (er) => {
          console.log(er);
        },
      });
    });
  }

  GetRelatedProducts() {
    console.log(this.product.category.id);
    this.shopService
      .getRelatedProducts(this.product.category.id, this.product.id)
      .subscribe({
        next: (resp) => {
          this.relatedProducts = resp;
          console.log(this.relatedProducts);
        },
        error: (e) => {
          console.log(e);
        },
      });
  }
  increaseCount() {
    this.count++;
  }
  decreaseCount() {
    if (this.count <= 1) this.count = 1;
    else this.count--;
  }
  addItemToCart(item:IProduct)
  {
    this.basketService.addItemToBasket(item,this.count);
  }
}
