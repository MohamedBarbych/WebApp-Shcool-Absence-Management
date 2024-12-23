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
      // ----- absence object with the student id wrapped inside a student object ---
      const formattedAbsence = {
        date: this.absence.date,
        reason: this.absence.reason,
        student: { id: this.absence.student_id }  // ------- student_id into a student object ---------
      };

      this.absenceService.createAbsence(formattedAbsence).subscribe(() => {
        this.router.navigate(['/absences']);
      });
    } else {
      console.log('Form is invalid. All fields are required.');
    }
  }

}

