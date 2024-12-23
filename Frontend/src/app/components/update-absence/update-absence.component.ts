import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute,Router } from '@angular/router';
import { AbsenceService } from '../../services/absence.service';

@Component({
  selector: 'app-update-absence',
  standalone: true, // Makes the component standalone
  imports: [CommonModule, FormsModule],
  templateUrl: './update-absence.component.html',
  styleUrl: './update-absence.component.css'
})
export class UpdateAbsenceComponent implements OnInit {

  absence:any = { reason: '', date: '' ,student_id:''};

  constructor(
    private route: ActivatedRoute,
    private absenceService: AbsenceService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    this.absenceService.getAbsenceById(id).subscribe(data => {
      this.absence = data;
    });
  }

  updateAbsence() {
    const id = this.route.snapshot.params['id'];
    this.absenceService.updateAbsence(id, this.absence).subscribe(() => {
      this.router.navigate(['/absences']);
    });
  }

}
