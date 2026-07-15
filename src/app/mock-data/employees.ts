
import { Employee } from '../models/employee';

export const EMPLOYEES: Employee[] = [ {
        id: 1,
        employeeId: 'EMP001',
        firstName: 'John',
        lastName: 'Doe',
        email: 'john.doe@example.com',
        department: 'Engineering',
        role: 'Angular Developer',
        status: 'Active',
        joiningDate: new Date('2022-01-10')
      },
      {
        id: 2,
        employeeId: 'EMP002',
        firstName: 'Sarah',
        lastName: 'Wilson',
        email: 'sarah.wilson@example.com',
        department: 'QA',
        role: 'QA Engineer',
        status: 'Active',
        joiningDate: new Date('2021-09-15')
      },
      {
        id: 3,
        employeeId: 'EMP003',
        firstName: 'David',
        lastName: 'Miller',
        email: 'david.miller@example.com',
        department: 'HR',
        role: 'HR Manager',
        status: 'Inactive',
        joiningDate: new Date('2020-05-20')
      }]