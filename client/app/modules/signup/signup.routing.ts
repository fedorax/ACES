import { Routes, RouterModule } from '@angular/router';
import { SignupComponent } from './components/signup.component';

const routes: Routes = [
  { path: 'signup', component: SignupComponent },
];

export const SignupRoutes = RouterModule.forChild(routes);
