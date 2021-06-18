import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeRoutingModule } from './employee-routing.module';
import { ListEmployeeComponent } from './list-employee/list-employee.component';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { FormsModule } from '@angular/forms';
import { ConfirmEqualValidatorDirective } from '../Shared/confirm-equal-validator.directive';



@NgModule({
  declarations: [ListEmployeeComponent, 
    CreateEmployeeComponent,
    ConfirmEqualValidatorDirective
  ],
  imports: [
    CommonModule,
    EmployeeRoutingModule,
    FormsModule
  ]
})
export class EmployeeModule { }
