import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './../../services/auth/auth.guard';
import { FeatureComponent } from './components/feature.component';

const routes: Routes = [
  { path: 'feature', component: FeatureComponent, canActivate: [AuthGuard] }
];

export const FeatureRoutes = RouterModule.forChild(routes);
