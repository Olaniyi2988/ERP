// auth.guard.ts
import { inject, Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export const canActivateGuard: CanActivateFn = (
    route: ActivatedRouteSnapshot, state: RouterStateSnapshot
) => {
 
    if (inject(AuthService).isLoggedIn) {
        return true;
    } else {
        inject(Router).navigate(['/login']); // Redirect to login page if not logged in
        return false;
    }
}
