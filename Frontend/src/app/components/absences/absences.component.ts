import { Component, OnInit } from '@angular/core';
import { AbsenceService } from '../../services/absence.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-absence',
  standalone: true,
  imports: [CommonModule, FormsModule], // No need to include HttpClientModule or provideHttpClient
  templateUrl: './absences.component.html',
  styleUrls: ['./absences.component.css'],
})
export class AbsenceListComponent implements OnInit {
  absences: any[] = [];
  newAbsence: any = { reason: '', date: '' ,student_id:''};

  constructor(private absenceService: AbsenceService) {}

  ngOnInit(): void {
    this.getAbsences();
  }

  getAbsences(): void {
    this.absenceService.getAbsences().subscribe((data) => {
      this.absences = data;
    });
  }

  addAbsence(): void {
    this.absenceService.createAbsence(this.newAbsence).subscribe(() => {
      this.getAbsences();
      this.newAbsence = { reason: '', date: '' };
    });
  }

  deleteAbsence(id: number): void {
    this.absenceService.deleteAbsence(id).subscribe(() => {
      this.getAbsences();
    });
  }
}
