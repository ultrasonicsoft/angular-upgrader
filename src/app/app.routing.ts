
import { RouterModule, Routes } from '@angular/router';

export const appRoutes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'dashboard' },
  { path: 'dashboard', loadChildren:'app/dashboard/dashboard.module#DashboardModule' }  
];