import { Component, input } from '@angular/core';
import {NavigationItem} from './navigation.type';
import {RouterLink, RouterLinkActive} from '@angular/router';

@Component({
  selector: 'app-navigation',
  imports: [
    RouterLink,
    RouterLinkActive
  ],
  template: `
    <nav data-testid="TOP_LEVEL_NAVBAR">
      @for (linkItem of links(); track linkItem.path) {
        <a [routerLink]="linkItem.path" routerLinkActive="active">{{ linkItem.label }}</a>
      }
    </nav>
  `,
  styles: `
    nav {
      display: flex;
      justify-content: flex-start;
      gap: 1rem;
    }

    a {
      font-size: 1.2rem;
      text-transform: uppercase;
      text-decoration: none;
      color: black;
    }

    a.active {
      text-decoration: underline;
      text-underline-offset: 0.5rem;
      text-decoration-thickness: 2px;
      text-decoration-color: blueviolet;
      text-decoration-style: dotted;
    }

  `
})
export class Navigation {

  links = input.required<NavigationItem[]>()

}
