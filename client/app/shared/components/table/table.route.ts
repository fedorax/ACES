import { Routes, RouterModule } from '@angular/router';
import { TableComponent } from './table.component';

const routes: Routes = [
  { path: 'table', component: TableComponent },
];

export const TableRoutes = RouterModule.forChild(routes);
