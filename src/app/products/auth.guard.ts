import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';

import { ProductInService } from './product-in.service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    private loggedInService: ProductInService,
    private router: Router
  ) {}

  canActivate(next: ActivatedRouteSnapshot,
              state: RouterStateSnapshot): Observable<boolean> {
    const url: string = state.url;
    return this.loggedInService.isLoggedIn$;
  }

  checkLogin(url: string): Observable<boolean> {
    /* if (this.loggedInService.isLoggedIn) {
      return true;
    } else {
      this.loggedInService.redirectUrl = url;
      return false;
    } */
    return this.loggedInService.isLoggedIn$;
  }
}
