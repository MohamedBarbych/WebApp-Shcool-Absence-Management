import { Routes } from '@angular/router';
import { StudentsComponent } from './components/students/students.component';
import { AbsenceListComponent } from './components/absences/absences.component';
import { HomeComponent } from './home/home.component';
import { HomeLayoutComponent } from './components/home-layout-component/home-layout-component.component';
import { AddStudentComponent } from './components/add-student/add-student.component';  // Import the AddStudentComponent
import { UpdateStudentComponent } from './components/update-student/update-student.component';  // Import the UpdateStudentComponent
import { AddAbsenceComponent } from './components/add-absence/add-absence.component';
import { UpdateAbsenceComponent } from './components/update-absence/update-absence.component';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {
    path: 'home',
    component: HomeLayoutComponent, // Use HomeLayoutComponent as the parent
    children: [
      { path: '', component: HomeComponent }, // Render HomeComponent inside the layout
    ],
  },
  { path: 'students', component: StudentsComponent },
  { path: 'students/add', component: AddStudentComponent },  // Add route for Add Student
  { path: 'students/update/:id', component: UpdateStudentComponent },  // Add route for Update Student
  { path: 'absences', component: AbsenceListComponent },
  { path: 'absences/add', component: AddAbsenceComponent },  // Add route for Add Student
  { path: 'absences/update/:id', component: UpdateAbsenceComponent },  // Add route for Update Student
];
