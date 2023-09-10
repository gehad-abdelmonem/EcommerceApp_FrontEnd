import { Component, Input } from '@angular/core';
import { IProduct } from 'src/app/component/core/models/IProduct';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css'],
})
export class ProductItemComponent {
  @Input() product: any;
  constructor() {}
}
