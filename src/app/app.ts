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
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  getAvailableLinks() {
    return Object.values(PATHS);
  }
}
