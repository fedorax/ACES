import { UserComponent } from './user.component';
import { Routes, RouterModule, CanActivate } from '@angular/router';
import { AuthGuard } from './../../services/auth/auth.guard';

const routes: Routes = [
  { path: 'user', component: UserComponent, canActivate: [AuthGuard]},
];

export const UserRoutes = RouterModule.forChild(routes);
