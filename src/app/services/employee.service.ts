import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Employee } from '../common/employee';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  private baseUrl = 'http://localhost:8888/api/employees';
  private baseUr2 = 'http://localhost:8888/api/employee';
  constructor(private httpClient: HttpClient) {}

  getEmployeesListFull(): Observable<Employee[]> {
    return this.httpClient.get<Employee[]>(this.baseUrl);
  }

  searchEmployees(theKeyword: string): Observable<Employee> {
    const searchUrl = `${this.baseUr2}/${theKeyword}`;
    return this.getEmployee(searchUrl);
  }

  private getEmployee(searchUrl: string): Observable<Employee> {
    return this.httpClient.get<Employee>(searchUrl);
  }
}
