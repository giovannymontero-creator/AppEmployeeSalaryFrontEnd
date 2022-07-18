import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/common/employee';
import { EmployeeService } from 'src/app/services/employee.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  employee: Employee;
  employees: Employee[];
  searchMode: boolean;
  mostrar: boolean = true;

  constructor(private employeeService: EmployeeService,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(() => {
    this.listEmployees();
    });
  }

  listEmployees(){
    this.searchMode = this.route.snapshot.paramMap.has('keyword');

    if (this.searchMode) {
      this.mostrar = true;
      this.handleSearchEmployees();
    }
    else {
      this.mostrar = false;
      this.employeeService.getEmployeesListFull().subscribe(
        data => {
          this.employees = data;
        }
      )
    }
  }

  handleSearchEmployees() {

    const theKeyword: string = this.route.snapshot.paramMap.get('keyword')!;

    this.employeeService.searchEmployees(theKeyword).subscribe(
      data => {
        this.employee = data;
      }
    )
  }  
}
