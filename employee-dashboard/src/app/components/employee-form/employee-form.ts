import { Component, inject } from '@angular/core';
import { FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { Employee1 } from '../../models/employee.model';
import { EmployeeService1 } from '../../services/employee';

@Component({
  selector: 'app-employee-form',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatButtonModule
  ],
  templateUrl: './employee-form.html'
})
export class EmployeeForm {

  private fb = inject(FormBuilder);
  private employeeService = inject(EmployeeService1);

  departments = ['IT', 'HR', 'Finance', 'Marketing'];

  employeeForm = this.fb.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    department: ['', Validators.required],
    dateOfJoining: ['', Validators.required]
  });

  addEmployee() {
    if (this.employeeForm.valid) {

      const formValue = this.employeeForm.value;

      const newEmployee: Employee1 = {
        id: Date.now(),
        firstName: formValue.firstName!,
        lastName: formValue.lastName!,
        email: formValue.email!,
        department: formValue.department!,
        dateOfJoining: formValue.dateOfJoining!.toString()
      };

      this.employeeService.addEmployee(newEmployee);
      this.employeeForm.reset();
    }
  }
}