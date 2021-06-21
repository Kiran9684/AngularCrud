import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateEmployeeCanDeactivateGuard } from '../routeGuards/create-employee-can-deactivate.guard';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { ListEmployeeComponent } from './list-employee/list-employee.component';



const routes: Routes = [ 
  {path:'list-employee',component:ListEmployeeComponent},
  {path:'create-employee',component:CreateEmployeeComponent,canDeactivate:[CreateEmployeeCanDeactivateGuard]},
  {path:'list-employee/:id',component:EmployeeDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeRoutingModule { }
