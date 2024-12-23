import { Component } from '@angular/core';
import { RouterOutlet ,RouterModule } from '@angular/router';

@Component({
  selector: 'app-home-layout',
  standalone: true,
  imports: [RouterOutlet, RouterModule], // Include RouterModule here
  templateUrl: './home-layout-component.component.html',
  styleUrls: ['./home-layout-component.component.css'],
})
export class HomeLayoutComponent {
  title = 'SchoolAbsence';

  isNavCollapsed = true;

  toggleNav() {
    this.isNavCollapsed = !this.isNavCollapsed;
  }

}
