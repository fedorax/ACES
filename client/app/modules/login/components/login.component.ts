import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {AuthService} from '../../../services/auth/auth.service';
import {AuthToken} from '../../../services/auth/auth.token';

import { LoginModel } from '../models/login.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  model: LoginModel;
  errorMessage: String;

  constructor(
    private authService: AuthService,
    private authToken: AuthToken,
    private router: Router
    ) { }

  ngOnInit() {
    this.model = new LoginModel();
  }

  onSubmit() {
    this.errorMessage = null;
    this.authService.login(this.model)
                    .then(result  => {
                      console.log(result);
                      this.authToken.setToken(result);
                      this.router.navigate(['/']);
                    })
                    .catch(error =>  this.errorMessage = error);
  }

}
