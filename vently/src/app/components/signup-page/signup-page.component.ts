import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup-page.component.html',
  styleUrls: ['./signup-page.component.scss'],
  standalone: true,
  imports: [ReactiveFormsModule, RouterModule]
})
export class SignupComponent {
  signupForm: FormGroup;
  signupError: string = '';

  constructor(
    private fb: FormBuilder,
    private authService: AuthService
  ) {
    this.signupForm = this.fb.group({
      username: ['', Validators.required],
      fullName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required]
    }, {
      validators: this.passwordMatchValidator
    });
  }

  passwordMatchValidator(form: FormGroup) {
    const password = form.get('password');
    const confirmPassword = form.get('confirmPassword');
    
    if (password && confirmPassword && password.value !== confirmPassword.value) {
      confirmPassword.setErrors({ passwordMismatch: true });
    } else {
      confirmPassword?.setErrors(null);
    }
  }

  onSubmit() {
    if (this.signupForm.valid) {
      const { username, fullName, email, password } = this.signupForm.value;
      const success = this.authService.signup({
        username,
        fullName,
        email,
        password
      });

      if (!success) {
        this.signupError = 'Email already exists';
      }
    }
  }
} 