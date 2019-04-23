import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeService } from '../employee.service';
import { Employee } from '../employee.model';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  emps:Employee[];


  constructor(private router : Router, private employeeService: EmployeeService) { }

  ngOnInit() {
    this.employeeService.getAllEmployee()
    .subscribe( data => {
      console.log(data);
      this.emps = data;
    });
  };

  deleteEmployee(employee : Employee) : void{
    this.employeeService.deleteEmployee(employee)
    .subscribe(data => {
      this.emps = this.emps.filter(u => u !== employee);
      alert("Employee record deleted successfully!!");
    })
  }

}
