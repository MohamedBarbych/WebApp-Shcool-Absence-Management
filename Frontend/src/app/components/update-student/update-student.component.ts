import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentService } from '../../services/student.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-update-student',
  standalone: true, // Makes the component standalone
  imports: [CommonModule, FormsModule], // Import FormsModule here
  templateUrl: './update-student.component.html',
  styleUrls: ['./update-student.component.css']
})
export class UpdateStudentComponent implements OnInit {
  student: any = { name: '', email: '', phoneNumber: '' };

  constructor(
    private route: ActivatedRoute,
    private studentService: StudentService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    this.studentService.getStudentById(id).subscribe(data => {
      this.student = data;
    });
  }

  updateStudent() {
    const id = this.route.snapshot.params['id'];
    this.studentService.updateStudent(id, this.student).subscribe(() => {
      this.router.navigate(['/students']);
    });
  }
}
