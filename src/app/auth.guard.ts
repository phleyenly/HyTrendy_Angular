import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationService } from './service/authentication.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authenService: AuthenticationService) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

      const token = sessionStorage.getItem('token')
      if(token) {
        this.authenService.authentication().subscribe (
          data => {
            if(route.routeConfig?.path?.startsWith('admin')) {
              if(data.role ==='ADMIN') {
                return true
              } else {
                window.location.href = '/login'
                return false
              }
            }
            return true
          },
          err => {
            if(err.status === 401) {
              window.location.href = '/login'
              return false
            }
            return false
          }
        )
      } else {
        window.location.href = '/login'
        return false
      }
      
    return true;
  }

  
}
