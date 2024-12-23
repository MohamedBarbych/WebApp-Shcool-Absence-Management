import { Routes } from '@angular/router';
import { StudentListComponent } from './components/students/students.component';
import { AbsenceListComponent } from './components/absences/absences.component';
import { HomeComponent } from './home/home.component';
import { HomeLayoutComponent } from './components/home-layout-component/home-layout-component.component';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {
    path: 'home',
    component: HomeLayoutComponent, // Use HomeLayoutComponent as the parent
    children: [
      { path: '', component: HomeComponent }, // Render HomeComponent inside the layout
    ],
  },  { path: 'students', component: StudentListComponent },
  { path: 'absences', component: AbsenceListComponent },
];
