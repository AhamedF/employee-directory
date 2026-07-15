import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-dashboard-card',
  standalone: true,
  imports: [],
  templateUrl: './dashboard-card.html',
  styleUrl: './dashboard-card.css',
})
export class DashboardCard {

  @Input() title!: string;
  @Input() trend!: string;
  @Input() value!: number;
  @Input() icon!: string;


}
