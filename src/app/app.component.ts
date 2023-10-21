import { Component, OnInit } from '@angular/core';
import { BasketService } from './component/basket/basket.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Store Application';
  constructor(private basketService:BasketService)
  {

  }
  ngOnInit(): void {
   const basketId = localStorage.getItem("basketId");
   if(basketId) this.basketService.getBasket(basketId);
  }
}

