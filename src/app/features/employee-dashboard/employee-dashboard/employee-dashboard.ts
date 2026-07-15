import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../../core/services/employeeService';
import { Employee } from '../../../models/employee';
import { EmployeeTable } from '../employee-table/employee-table';
import { DashboardSummary } from '../dashboard-summary/dashboard-summary';
import { EmployeeSearch } from '../employee-search/employee-search';

@Component({
  selector: 'app-employee-dashboard',
  imports: [EmployeeTable, DashboardSummary, EmployeeSearch],
  templateUrl: './employee-dashboard.html',
  styleUrl: './employee-dashboard.css',
})
export class EmployeeDashboard implements OnInit {

  employees : Employee[] = [];
  filteredEmployee: Employee[] = [];
  constructor(private empService: EmployeeService ){}

  ngOnInit(){
    this.empService.getEmployees().subscribe((employees) => {
      this.employees = employees;
      this.filteredEmployee = employees;
    })
  }

  onSearch(searchValue:string){

    const search = searchValue.toLowerCase();
    this.filteredEmployee = this.employees.filter(employee => {
      
      const fullName = `${employee.firstName} ${employee.lastName}`.toLowerCase();
      return fullName.includes(search)

    })

  }

}
