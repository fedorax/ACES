import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './../../services/auth/auth.guard';
import { LogoutComponent } from './components/logout.component';

const routes: Routes = [
  { path: 'logout', component: LogoutComponent, canActivate: [AuthGuard]},
];

export const LogoutRoutes = RouterModule.forChild(routes);
