import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './component/nav-bar/nav-bar.component';
import { ShopModule } from './component/shop/shop.module';
import { ScrollToTopComponent } from './component/scroll-to-top/scroll-to-top.component';
import { HomeModule } from './component/home/home.module';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    ScrollToTopComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
