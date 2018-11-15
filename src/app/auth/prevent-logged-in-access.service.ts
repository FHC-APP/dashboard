import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable()
export class PreventLoggedInAccessService  implements CanActivate {

    constructor(private authService: AuthService, private router: Router) {}

    canActivate() {
      if (!this.authService.isAuthenticated()) {
        return true;
      }
      this.router.navigate(['/']);
      return false;
    }

  }
