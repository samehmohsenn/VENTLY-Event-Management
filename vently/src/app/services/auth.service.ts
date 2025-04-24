import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

interface User {
  username?: string;
  fullName?: string;
  email: string;
  password: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private users: User[] = [];

  constructor(private router: Router) {
    // Load users from localStorage if any exist
    const savedUsers = localStorage.getItem('users');
    if (savedUsers) {
      this.users = JSON.parse(savedUsers);
    }
  }

  login(email: string, password: string): boolean {
    const user = this.users.find(u => u.email === email && u.password === password);
    if (user) {
      localStorage.setItem('currentUser', JSON.stringify(user));
      this.router.navigate(['/']);
      return true;
    }
    return false;
  }

  signup(user: User): boolean {
    // Check if email already exists
    if (this.users.some(u => u.email === user.email)) {
      return false;
    }

    this.users.push(user);
    localStorage.setItem('users', JSON.stringify(this.users));
    localStorage.setItem('currentUser', JSON.stringify(user));
    this.router.navigate(['/']);
    return true;
  }

  logout() {
    localStorage.removeItem('currentUser');
    this.router.navigate(['/login']);
  }

  isLoggedIn(): boolean {
    return localStorage.getItem('currentUser') !== null;
  }
} 