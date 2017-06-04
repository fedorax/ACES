import { AuthToken } from './../../services/auth/auth.token';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  constructor(private authToken: AuthToken) { }

  ngOnInit() {
  }

}
