import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentsComponent } from './components/students/students.component';
import { AbsencesComponent } from './components/absences/absences.component';

const routes: Routes = [
  { path: 'students', component: StudentsComponent },
  { path: 'absences', component: AbsencesComponent },
  { path: '', redirectTo: '/students', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
