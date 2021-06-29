import { Injectable } from '@angular/core';
import { Employee } from '../models/employee.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  
  employees: Employee[] = [
    {
      id: 1,
      name: 'Mark',
      gender: 'Male',
      contactPreference: 'Email',
      email: 'mark@pragimtech.com',
      dateOfBirth: new Date('10/25/1988'),
      department: '1',
      isActive: true,
      photoPath: 'assets/images/mark.png'
    },
    {
      id: 2,
      name: 'Mary',
      gender: 'Female',
      contactPreference: 'Phone',
      phoneNumber: 2345978640,
      dateOfBirth: new Date('11/20/1979'),
      department: '1',
      isActive: true,
      photoPath: 'assets/images/mary.png'
    },
    {
      id: 3,
      name: 'John',
      gender: 'Male',
      contactPreference: 'Phone',
      phoneNumber: 5432978640,
      dateOfBirth: new Date('3/25/1976'),
      department: '2',
      isActive: false,
      photoPath: 'assets/images/john.png'
    },
  ]
  constructor() { }

  getEmployees():Employee[]
  {
    return this.employees;
  }

  saveEmployee(employee:Employee):void{
    this.employees.push(employee);
  }

  getEmployeeById(id:number)
  {
   // console.log('Hello');
   // console.log(this.employees.find(e =>e.id===id));
    return this.employees.find(e =>e.id===id);
  }

}
