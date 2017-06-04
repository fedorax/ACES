import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SignupComponent } from './components/signup.component';
import { SignupRoutes } from './signup.routing';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SignupRoutes
  ],
  declarations: [SignupComponent],
  exports: [
    SignupComponent
  ]
})
export class SignupModule { }
