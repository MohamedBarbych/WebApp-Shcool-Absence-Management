import { Component, OnInit } from '@angular/core';
import { StudentService } from '../../services/student.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-student',
  standalone: true,
  imports: [CommonModule, FormsModule], // No need for HttpClientModule or provideHttpClient here
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css'],
})
export class StudentListComponent implements OnInit {
  students: any[] = [];
  newStudent: any = { name: '', email: '' };

  constructor(private studentService: StudentService) {}

  ngOnInit(): void {
    this.getStudents();
  }

  getStudents(): void {
    this.studentService.getStudents().subscribe((data) => {
      this.students = data;
    });
  }

  addStudent(): void {
    this.studentService.createStudent(this.newStudent).subscribe(() => {
      this.getStudents();
      this.newStudent = { name: '', email: '' };
    });
  }

  deleteStudent(id: number): void {
    this.studentService.deleteStudent(id).subscribe(() => {
      this.getStudents();
    });
  }
}
