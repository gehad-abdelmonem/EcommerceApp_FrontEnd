import { Component, Input } from '@angular/core';
import { IProduct } from 'src/app/component/core/models/IProduct';
import { BasketService } from '../../basket/basket.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css'],
})
export class ProductItemComponent {
  @Input() product: any;
  constructor(private BasketService:BasketService) {}

  addItemToBasket()
  {
   this.product && this.BasketService.addItemToBasket(this.product);
  }
}
