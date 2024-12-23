import { Component, OnInit } from '@angular/core';
import { AbsenceService } from '../../services/absence.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
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

  constructor(private absenceService: AbsenceService, private router:Router) {}

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
      this.newAbsence = { reason: '', date: '',student_id:'' };
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
