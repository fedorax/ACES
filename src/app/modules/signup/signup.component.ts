import { Router } from '@angular/router';
import { AuthToken } from './../../services/auth/auth.token';
import { Component, OnInit } from '@angular/core';
import { SignupModel } from './signup.model';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  model: SignupModel;
  constructor(private authToken: AuthToken, private router: Router) { }

  ngOnInit() {
    this.model = new SignupModel();
  }
  onSubmit() {
    this.authToken.setToken("Sample");
    this.router.navigate(['feature']);
  }
}