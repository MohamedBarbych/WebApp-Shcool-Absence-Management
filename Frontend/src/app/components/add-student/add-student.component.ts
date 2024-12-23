import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { StudentService } from '../../services/student.service';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent {
  student: any = { name: '', email: '' };

  constructor(private studentService: StudentService, private router: Router) {}

  addStudent() {
    this.studentService.createStudent(this.student).subscribe(() => {
      this.router.navigate(['/students']);
    });
  }
}
