import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRoutes } from './home.routing';
import { ConfirmModalModule } from 'app/shared/modals/confirm-modal';

@NgModule({
  imports: [
    CommonModule,
    ConfirmModalModule,
    HomeRoutes
  ],
  declarations: [HomeComponent],
  exports: [HomeComponent]
})

export class HomeModule { }
