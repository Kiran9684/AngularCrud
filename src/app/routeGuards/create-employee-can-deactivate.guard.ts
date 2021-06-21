import { Injectable } from '@angular/core';
import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { CreateEmployeeComponent } from '../employee/create-employee/create-employee.component';

@Injectable({
  providedIn: 'root'
})
export class CreateEmployeeCanDeactivateGuard implements CanDeactivate<CreateEmployeeComponent> {
  canDeactivate(component: CreateEmployeeComponent): boolean  {
    console.log("hello World")
      if(component.createEmployeeForm.dirty)
      {
        console.log("hello World")
        return confirm("Are You Sure You Want To Discard The Changes ?");
      }
      return true;
    // return component.canDeactivate();
    }
  
}
