import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedRoutingModule } from './shared-routing.module';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ScrollToTopComponent } from './scroll-to-top/scroll-to-top.component';


@NgModule({
  declarations: [
    NavBarComponent,
    ScrollToTopComponent,
  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
  ],
  exports:[
    NavBarComponent,
    ScrollToTopComponent,
  ]
})
export class SharedModule { }
