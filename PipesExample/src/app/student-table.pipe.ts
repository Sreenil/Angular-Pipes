import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'studentTable',
  standalone: true
})
export class StudentTablePipe implements PipeTransform {

  transform(value: string, gender: string): string {
    if (gender.toLowerCase() === 'male') {
      return 'Mr. ' + value;
    } else if (gender.toLowerCase() === 'female') {
      return 'Miss. ' + value;
    } else {
      return value;
    }
  }

}
