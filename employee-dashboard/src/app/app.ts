import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { EmployeeForm } from './components/employee-form/employee-form';
import { EmployeeService1 } from './services/employee';
import { EmployeeSearchPipe } from './pipes/employee-search-pipe';
import { JoiningDatePipe } from './pipes/joining-date-pipe';
import { EmployeeList } from './components/employee-list/employee-list';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    EmployeeForm,
    EmployeeList,
    EmployeeSearchPipe,
    JoiningDatePipe
  ],
  templateUrl: './app.html'
})
export class App {

  searchText = '';

  constructor(public employeeService: EmployeeService1) {}
}