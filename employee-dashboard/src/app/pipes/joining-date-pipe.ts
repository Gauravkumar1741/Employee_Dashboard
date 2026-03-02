import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'joiningDate',
  standalone: true
})
export class JoiningDatePipe implements PipeTransform {

  transform(value: string): string {
    return new Date(value).toLocaleDateString();
  }
}