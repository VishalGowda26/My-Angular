import { Component } from '@angular/core';
import { LoginService } from '../login.service';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  loginForm: FormGroup = new FormGroup({
    email: new FormControl(),
    password: new FormControl(),
  });

  constructor(private _loginService: LoginService, private _router: Router) {}

  token: string = '';
  login() {
    console.log(this.loginForm.value);
    this._loginService.login(this.loginForm.value).subscribe(
      (data: any) => {
        this.token = data.token;
        alert('Login Successfully!');
        sessionStorage.setItem('token', this.token);
        console.log(this.token);
        this._router.navigateByUrl('/dashboard');
      },
      (err: any) => {
        alert('Invalid credentials!');
      }
    );
  }

  showPassword: boolean = false;

  seePassword() {
    this.showPassword = !this.showPassword;
  }
}
