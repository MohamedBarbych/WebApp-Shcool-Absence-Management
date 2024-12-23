import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { StudentService } from '../../services/student.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-student',
  standalone: true, // Enables standalone component
  imports: [CommonModule, FormsModule], // Import FormsModule for template-driven forms
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css'],
})
export class AddStudentComponent {
  student: any = { name: '', email: '', phoneNumber: '' }; // Initialize student object

  constructor(private studentService: StudentService, private router: Router) {}

  // Method triggered when the form is submitted
  addStudent() {
    if (this.student.name && this.student.email && this.student.phoneNumber) {
      this.studentService.createStudent(this.student).subscribe(() => {
        this.router.navigate(['/students']); // Navigate back to the students list
      });
    } else {
      console.log('Form is invalid. All fields are required.');
    }
  }
}
