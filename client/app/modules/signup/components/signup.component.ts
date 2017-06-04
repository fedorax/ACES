import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthToken } from '../../../services/auth/auth.token';
import { AuthService } from '../../../services/auth/auth.service';
import { SignupModel } from '../models/signup.model';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  model: SignupModel;
  errorMessage: string;
  constructor(
    private authService: AuthService,
    private authToken: AuthToken,
    private router: Router
  ) { }

  ngOnInit() {
    this.model = new SignupModel();
  }
  onSubmit() {
    this.errorMessage = null;
    this.authService.signup(this.model)
                    .then(result  => {
                      this.authToken.setToken(result);
                      this.router.navigate(['/']);
                    })
                    .catch(error =>  this.errorMessage = error);
  }
}
