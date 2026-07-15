export interface Employee {
  id: number;
  employeeId: string;
  firstName: string;
  lastName: string;
  email: string;
  department: string;
  role: string;
  status: 'Active' | 'Inactive';
  joiningDate: Date;
}