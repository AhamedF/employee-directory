import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { required } from '@angular/forms/signals';
import { Employee } from '../../../models/employee';

@Component({
  selector: 'app-employee-table',
  imports: [],
  templateUrl: './employee-table.html',
  styleUrl: './employee-table.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EmployeeTable {

  @Input({required: true}) employees: Employee[] = []

}
