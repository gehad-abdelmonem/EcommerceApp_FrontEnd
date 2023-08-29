import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/home/home/home.component';
import { ShopComponent } from './component/shop/shop/shop.component';
import { ProductDetailsComponent } from './component/shop/product-details/product-details.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  {
    path: 'shop',
    loadChildren: () =>
      import('src/app/component/shop/shop.module').then((m) => m.ShopModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
