import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedRoutingModule } from './shared-routing.module';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ScrollToTopComponent } from './scroll-to-top/scroll-to-top.component';
import { OrderTotalsComponent } from './order-totals/order-totals.component';


@NgModule({
  declarations: [
    NavBarComponent,
    ScrollToTopComponent,
    OrderTotalsComponent,
  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
  ],
  exports:[
    NavBarComponent,
    ScrollToTopComponent,
    OrderTotalsComponent
  ]
})
export class SharedModule { }
