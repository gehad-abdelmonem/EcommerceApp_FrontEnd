import { Component, OnInit } from '@angular/core';
import { Collapse,Ripple, Dropdown, initTE } from 'tw-elements';
import { BasketService } from '../../basket/basket.service';
import { IBasketItem } from '../../core/models/basket';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  constructor(public BasketService:BasketService)
  {

  }
  ngOnInit() {
    initTE({ Collapse, Dropdown,Ripple });
  }

  getCount(items:IBasketItem[])
  {
    return items.reduce((sum,item)=>sum+item.quentity,0 );
  }

}
