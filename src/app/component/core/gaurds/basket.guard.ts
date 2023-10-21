import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { BasketService } from '../../basket/basket.service';

@Injectable({
  providedIn: 'root'
})
export class BasketGuard implements CanActivate {
  constructor(private router:Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if(localStorage.getItem("basketId")==null)
      {
        this.router.navigateByUrl('/shop')
        return false;
      }
      else
      {
        return true;
      }
  }
  
}
