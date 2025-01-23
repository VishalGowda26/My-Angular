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
  constructor(private _loginService: LoginService, private _router: Router) {}

  loginForm: FormGroup = new FormGroup({
    email: new FormControl(),
    password: new FormControl(),
  });

  login() {
    console.log(this.loginForm.value);
    this._loginService.login(this.loginForm.value).subscribe(
      (data: any) => {
        console.log(data);
        alert('Login Successfully!');
        sessionStorage.setItem('token', data.token);
        // Navigate to Url
        this._router.navigateByUrl('/dashboard');
      },
      (err: any) => {
        // console.log(err);
        alert('Invalid Credentials!');
      }
    );
  }
}
