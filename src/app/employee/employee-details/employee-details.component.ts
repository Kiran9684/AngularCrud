import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from 'src/app/models/employee.model';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {

  employee: Employee;
  id: number;
  constructor(private _service: EmployeeService, private _route: ActivatedRoute, private _router: Router) { }

  ngOnInit(): void {
    //this.id = +this._route.snapshot.params.id;
    // const id = +this._route.snapshot.params['id']; //both statements works fine
    this._route.paramMap.subscribe((params) => {
      this.id = +params.get('id');
      this.employee = this._service.getEmployeeById(this.id);
    })
    //  console.log('First Time')
  }

  viewNextEmployee() {
    if (this.id < 3) {
      this.id = this.id + 1;
      console.log('New Id:' + this.id)
    }
    else {
      this.id = 1;
    }
   this._router.navigate(['employee/list-employee', this.id]);
  //  this._router.navigate([`employee/list-employee + ${this.id}`]); //this type not working properly 
  }
}
