import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Department } from 'src/app/models/department.model';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {

  @ViewChild('employeeForm') public createEmployeeForm: NgForm;


  checkVal = 'true'; //two way binding is done , Inorder to check the checkbox by default , see html page 
  defaultOption = null;//two way binding is done , Inorder to check the checkbox by default , see html page 
  pathVal = ''; //for two binding 
  showImage: boolean = false;
  isActive = null;

  departments: Department[] = [
    { id: 1, name: 'Help Desk' },
    { id: 2, name: 'HR' },
    { id: 3, name: 'Customer Management' },
    { id: 4, name: 'Employee Management' },
  ]
  constructor(private employeeService:EmployeeService , private router:Router) { }

  ngOnInit(): void {
  }
  saveEmployee(empData): void {
    console.log(empData); //To log all the properties that ngForm provides , check in console 
    console.log(empData.value); //To print the value entered into form 
    //console.log("Is Active Value"+empData.value.isActiveCheck);
    this.employeeService.saveEmployee(empData.value); //To save employe data to employee array in the service class
    this.router.navigate(['employee/list-employee'])
  }
  activateImage() {
    this.showImage = !this.showImage;
  }
  // canDeactivate()
  // {
  //   return confirm("Are You Sure");
  // }
}
