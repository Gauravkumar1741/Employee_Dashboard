import { Injectable, signal } from '@angular/core';
import { Employee1 } from '../models/employee.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService1 {

  private employeeSignal = signal<Employee1[]>([]);

  employees = this.employeeSignal.asReadonly();

  addEmployee(emp: Employee1) {
    this.employeeSignal.update(list => [...list, emp]);
  }
}