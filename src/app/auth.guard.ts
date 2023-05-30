import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';

import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
 
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (this.authService.isLoggedIn()) {
      return true;
    }

    this.router.navigate(['/login']);
    return false;

  }
  

  // canActivate(): boolean {
  //   if (this.authService.isLoggedIn()) {
  //     console.log('true')
  //     return true
  //   } 
  //   else {
  //     console.log('false')            
  //     this.router.navigate(['/login'])
  //     return false
  //   }
  // }
}
