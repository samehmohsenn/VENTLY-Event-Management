import { Routes } from '@angular/router';
import { LoginComponent } from './components/login-page/login-page.component';
import { SignupComponent } from './components/signup-page/signup-page.component';

export const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: '**', redirectTo: '/login' }
];  