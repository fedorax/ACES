import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogoutComponent } from './components/logout.component';
import { LogoutRoutes } from './logout.routing';

@NgModule({
  imports: [
    CommonModule,
    LogoutRoutes
  ],
  declarations: [LogoutComponent],
  exports: [
    LogoutComponent
  ]
})
export class LogoutModule { }
