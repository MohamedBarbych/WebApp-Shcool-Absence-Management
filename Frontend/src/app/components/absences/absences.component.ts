import { Component, OnInit } from '@angular/core';
import { AbsenceService } from '../../services/absence.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-absence',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './absences.component.html',
  styleUrls: ['./absences.component.css'],
})
export class AbsenceListComponent implements OnInit {
  absences: any[] = [];
  newAbsence: any = { reason: '', date: '', student_id: '' };

  constructor(private absenceService: AbsenceService, private router: Router) {}

  ngOnInit(): void {
    this.getAbsences();
  }

  getAbsences(): void {
    this.absenceService.getAbsences().subscribe((data: any[]) => {
      // Map absences to extract student_id if nested inside a student object
      this.absences = data.map((absence) => ({
        ...absence,
        student_id: absence.student?.id || null, // Extract student_id or assign null if unavailable
      }));
    });
  }

  addAbsence(): void {
    this.absenceService.createAbsence(this.newAbsence).subscribe(() => {
      this.getAbsences();
      this.newAbsence = { reason: '', date: '', student_id: '' };
    });
  }

  deleteAbsence(id: number): void {
    this.absenceService.deleteAbsence(id).subscribe(() => {
      this.getAbsences();
    });
  }

  navigateToAddAbscence() {
    this.router.navigate(['absences/add']);
  }

  navigateToUpdateAbscence(id: number) {
    this.router.navigate(['absences/update/', id]);
  }
}
