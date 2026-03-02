import { Pipe, PipeTransform } from '@angular/core';
import { Employee1 } from '../models/employee.model';

@Pipe({
  name: 'employeeSearch',
  standalone: true
})
export class EmployeeSearchPipe implements PipeTransform {

  transform(employees: Employee1[], searchText: string): Employee1[] {

    if (!searchText) return employees;

    return employees.filter(emp =>
      (emp.firstName + ' ' + emp.lastName)
        .toLowerCase()
        .includes(searchText.toLowerCase())
    );
  }
}