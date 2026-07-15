import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { Employee } from '../../../models/employee';
import { DashboardCard } from '../../../shared/components/dashboard-card/dashboard-card';

@Component({
  selector: 'app-dashboard-summary',
  imports: [DashboardCard],
  standalone: true,
  templateUrl: './dashboard-summary.html',
  styleUrl: './dashboard-summary.css',
})
export class DashboardSummary implements OnChanges{

  @Input ({required: true}) employees : Employee[] = [];

  inActiveStatus = 0
  totalEmployee = 0;
  deptCount = 0
  activeEmployeesCount = 0;

 

  ngOnChanges(){
      this.inActiveStatus = this.employees.filter(employee => employee.status === 'Inactive').length;
      this.totalEmployee = this.employees.length;
      this.deptCount = this.employees.filter(employee => employee.department).length;
      this.activeEmployeesCount = this.employees.filter(employee => employee.status === 'Active').length;
    }

}
