import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from 'src/app/models/employee.model';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-list-employee',
  templateUrl: './list-employee.component.html',
  styleUrls: ['./list-employee.component.css']
})
export class ListEmployeeComponent implements OnInit {

  employees: Employee[];
  selectedEmpId:number;
  constructor(private employeeService: EmployeeService, private _route: Router,private router:ActivatedRoute) { }

  ngOnInit(): void {
 
  
    this.employees = this.employeeService.getEmployees();
  }

  onClick(id: number) {
    this._route.navigate(['employee/list-employee', id])
  }

}
