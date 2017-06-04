import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './../../../services/auth/auth.service';
import { AuthToken } from './../../../services/auth/auth.token';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})

export class LogoutComponent implements OnInit {
  errorMessage: String;

  constructor(
    private authService: AuthService,
    private authToken: AuthToken,
    private router: Router
    ) { }

  ngOnInit() {
  }
  onSubmit() {
    this.authService.logout()
                    .then(result  => {
                      this.authToken.removeToken();
                      this.router.navigate(['/']);
                    })
                    .catch(error =>  this.errorMessage = error);
  }
}
