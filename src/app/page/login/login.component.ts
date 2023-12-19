import { AuthService } from './../../service/auth.service';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginForm!: FormGroup;
  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    })
  }
  onSubmit() {
    const { username, password } = this.loginForm.value
    this.authService.getUser(username).subscribe((item) => {
      if (item && item.password) {
        console.log('login success')
        this.router.navigate(['/dashboard'])
      } else {
        console.log('invalid')
      }
    })
  }
}
