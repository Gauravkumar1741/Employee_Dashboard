import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { EmployeeService1 } from '../../services/employee';
//import { EmployeeSearchPipe } from '../../pipes/employee-search-pipe';
//import { JoiningDatePipe } from '../../pipes/joining-date-pipe';

@Component({
  selector: 'app-employee-list',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
   // EmployeeSearchPipe,
    //JoiningDatePipe
  ],
  templateUrl: './employee-list.html'
})
export class EmployeeList {

  private employeeService = inject(EmployeeService1);

  searchText = '';

  employees = this.employeeService.employees;
}