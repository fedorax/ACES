import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LoginRoutes } from './login.routing';
import { LoginComponent } from './components/login.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    LoginRoutes
  ],
  declarations: [LoginComponent],
  exports: [
    LoginComponent
  ]
})
export class LoginModule { }
