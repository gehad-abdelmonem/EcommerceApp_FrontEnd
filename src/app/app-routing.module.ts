import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/home/home/home.component';
import { NotFoundComponent } from './component/core/not-found/not-found.component';
import { ServerErrorComponent } from './component/core/server-error/server-error.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  {
    path: 'shop',
    loadChildren: () =>
      import('src/app/component/shop/shop.module').then((m) => m.ShopModule),
  },
  { path: 'notFound', component: NotFoundComponent },
  { path: 'serverError', component: ServerErrorComponent },
  {path:'**',component:NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
