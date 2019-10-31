import { AuthService } from './auth/auth.service';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './auth/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  user$: Observable<User>;
  authenticated$: Observable<boolean>;

  constructor(
    private authService: AuthService,
    private router: Router) {
    this.user$ = this.authService.getUser();
    this.authenticated$ = this.authService.authenticated();
  }

  logout() {
    this.authService.logout();
    this.router.navigateByUrl('/auth/login');
  }

}
