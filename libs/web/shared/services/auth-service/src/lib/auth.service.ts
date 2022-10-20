import { Injectable } from '@angular/core';
import { BehaviorSubject, tap } from 'rxjs';
import { AuthedUser, LoginReqBody, NewUser, User } from './auth.model';
import { HttpService } from '@digi/web/shared/data-access/http-api';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _auth$ = new BehaviorSubject<boolean>(this.isAuthenticated());
  private _authUser$ = new BehaviorSubject<User | undefined>(undefined);

  returnUrl = '/home';

  constructor(private httpService: HttpService, private router: Router) {}

  setAuth(value: boolean) {
    this._auth$.next(value);
  }

  getAuth() {
    return this._auth$.asObservable();
  }

  setAuthUser(value: User | undefined) {
    this._authUser$.next(value);
  }

  getAuthUser() {
    return this._authUser$.asObservable();
  }

  login(username: string, password: string) {
    return this.httpService.post<AuthedUser, LoginReqBody>('/login', { username, password }).pipe(
      tap((res) => {
        this.setSession(res.user, res.accessToken);
        this.navigateAfterLogin();
      })
    );
  }

  setSession(user: User, accessToken: string) {
    this._authUser$.next(user);
    localStorage.setItem('user', JSON.stringify(user));
    localStorage.setItem('access_token', accessToken);
  }

  navigateAfterLogin(): void {
    this.router.navigate([this.returnUrl]).then(() => {
      this.returnUrl = '/';
    });
  }

  isAuthenticated() {
    return !!this.getToken();
  }

  getToken() {
    return localStorage.getItem('access_token');
  }

  register(user: NewUser) {
    return this.httpService.post('/register', user);
  }

  logout() {
    this.removeSession();
    this.router.navigateByUrl('/').then();
  }

  removeSession() {
    this._authUser$.next(undefined);
    localStorage.removeItem('user');
    localStorage.removeItem('access_token');
  }
}
