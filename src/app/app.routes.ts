import { Routes } from '@angular/router';
import { EmployeeDashboard } from './features/employee-dashboard/employee-dashboard/employee-dashboard';
import { EmployeeTable } from './features/employee-dashboard/employee-table/employee-table';
import { DashboardCard } from './shared/components/dashboard-card/dashboard-card';

export const routes: Routes = [

    {path:'',component: EmployeeDashboard },
    {path: 'emp-Dashboard', component: EmployeeDashboard},
    {path: 'emp-table', component: EmployeeTable}
];
