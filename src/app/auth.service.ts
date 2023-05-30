import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor() { }

  public isAuthenticated = false;
  
  login(username: string, password: string): any {
    if (username === 'vaish' && password === 'vaish') {
      this.isAuthenticated = true;
      return true;
    }
    return false;
  }
  
  logout(): void {
    this.isAuthenticated = false;
  }
  
  isLoggedIn(): boolean {
    return this.isAuthenticated;
  }
  
}

