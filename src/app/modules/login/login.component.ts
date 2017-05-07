import { Router } from '@angular/router';
import { AuthToken } from './../../services/auth/auth.token';
import { Component, OnInit } from '@angular/core';
import { LoginModel } from './login.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  model: LoginModel;

  constructor(private authToken: AuthToken, private router: Router) { }

  ngOnInit() {
    this.model = new LoginModel();
  }

  onSubmit() {
    this.authToken.setToken("Sample");
    this.router.navigate(['feature']);
  }

}
