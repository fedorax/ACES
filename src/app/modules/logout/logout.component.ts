import { Router } from '@angular/router';
import { AuthToken } from './../../services/auth/auth.token';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private authToken: AuthToken, private router: Router) { }

  ngOnInit() {
  }
  onSubmit() {
    this.authToken.removeToken();
    this.router.navigate(['/']);
  }
}
