import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'employee', loadChildren: () => import('./employee/employee.module').then(m => m.EmployeeModule) },
  {
    path : ' ' ,
    redirectTo :'employee/list-employee',
    pathMatch : 'full'
    },
    {
      path : '**',
      redirectTo :'employee/list-employee',
      pathMatch :'full'
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
