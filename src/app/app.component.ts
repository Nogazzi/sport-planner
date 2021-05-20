import {Component, OnInit} from '@angular/core';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
  title = 'sport-planner';
  items: MenuItem[];

  constructor() {
    this.items = [
      {
        label: 'Home',
        icon: 'pi pi-fw pi-home',
        routerLink: 'home'
      },
      {
        label: 'Calendar',
        icon: 'pi pi-fw pi-calendar',
        routerLink: 'calendar'
      },
      {
        label: 'Exercises',
        icon: 'pi pi-fw pi-cog',
        routerLink: 'exercises'
      },

    ];
  }

  ngOnInit(): void {
  }
}
