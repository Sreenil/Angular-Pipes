import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { StudentTablePipe } from "../student-table.pipe";

@Component({
    selector: 'app-student',
    standalone: true,
    templateUrl: './student.component.html',
    styleUrl: './student.component.scss',
    imports: [StudentTablePipe,CommonModule]
})
export class StudentComponent {
  students = [
    { name: 'John', gender: 'Male' },
    { name: 'Sreenil', gender: 'Male' },
    { name: 'Anakha', gender: 'Female' },
    { name: 'Manya', gender: 'Female' },
    { name: 'Ramu', gender: 'Male' }
  ];

}
