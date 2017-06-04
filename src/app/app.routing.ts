import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './modules/home/home.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'}
];
