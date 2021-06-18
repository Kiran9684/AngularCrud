import { Component, OnInit } from '@angular/core';
import { Department } from 'src/app/models/department.model';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {


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
  constructor() { }

  ngOnInit(): void {
  }
  saveEmployee(empData): void {
    console.log(empData) //To log all the properties that ngForm provides , check in console 
    console.log(empData.value) //To print the value entered into form 
  }
  activateImage() {
    this.showImage = !this.showImage;

  }
}
