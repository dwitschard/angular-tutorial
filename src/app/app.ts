import {Component, signal} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {Navigation} from './components/navigation/navigation';
import {PATHS} from './config/paths.config';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    Navigation
  ],
  template: `
    <app-navigation [links]="getAvailableLinks()"></app-navigation>

    <div>
      <router-outlet></router-outlet>
    </div>
  `,
  styles: `
    .my-class {
    }
  `
})
export class App {
  getAvailableLinks() {
    return Object.values(PATHS);
  }
}
