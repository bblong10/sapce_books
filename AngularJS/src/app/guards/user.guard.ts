import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
} from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class UserGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    console.log('ôkkoko');
    if (this.authService.isAuthenticated()) {
      return true;
    } else {
      alert('Vui lòng đăng nhập trước!');
      this.router.navigate(['/auth/signin']);
      return false;
    }
  }
}
