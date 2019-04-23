import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeService } from '../employee.service';
import { Employee } from '../employee.model';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})


export class AddEmployeeComponent implements OnInit {

  employee : Employee = new Employee();

  constructor(private router : Router, private employeeService : EmployeeService) { }

  ngOnInit() {
  }

  createEmployee() : void {
    this.employeeService.createEmployee(this.employee)
    .subscribe(data => {
      this.employee=new Employee();
      alert("Employee created successfully!!");
    })
  }
}
