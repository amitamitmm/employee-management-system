import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from './employee.model';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http:HttpClient) { }

  private employeeURL = 'http://localhost:8089/employees/';

  public  getAllEmployee() :Observable<Employee[]> {
    return this.http.get<Employee[]>(this.employeeURL);
  }

  public createEmployee(employee:Employee){
    return this.http.post(this.employeeURL, employee);
  }

  public deleteEmployee(employee: Employee){
    return this.http.delete(this.employeeURL + "/"+ employee.id);
  }
}
