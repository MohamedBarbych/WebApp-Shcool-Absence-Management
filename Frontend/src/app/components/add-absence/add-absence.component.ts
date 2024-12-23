import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AbsenceService } from '../../services/absence.service';

@Component({
  selector: 'app-add-absence',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './add-absence.component.html',
  styleUrl: './add-absence.component.css'
})
export class AddAbsenceComponent {
  absence:any = { reason: '', date: '' ,student_id:''};
  constructor(private absenceService: AbsenceService, private router: Router) {}

  addAbsence() {
    if (this.absence.date && this.absence.student_id && this.absence.reason) {
      this.absenceService.createAbsence(this.absence).subscribe(() => {
        this.router.navigate(['/abscences']);
      });
    } else {
      console.log('Form is invalid. All fields are required.');
    }
  }
}

