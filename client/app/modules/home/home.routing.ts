import { HomeComponent } from './home.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'home', component: HomeComponent }
];

export const HomeRoutes = RouterModule.forChild(routes);
