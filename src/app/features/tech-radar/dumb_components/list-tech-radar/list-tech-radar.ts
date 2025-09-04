import {Component, input} from '@angular/core';
import {Technology} from '../../tech-radar.types';

@Component({
  selector: 'app-list-tech-radar',
  imports: [],
  template: `
    <h3>List View</h3>
    <ul class="technology-list">
      @for (technology of technologies(); track technology.name) {
        <div class="style-it-fancy">
          <li [attr.data-testid]="'LIST_ITEM_' + technology.name">
            {{ technology.name }} - {{ technology.ring }} - {{ technology.kategorie }} - {{ technology.description }}
          </li>
        </div>
      }
    </ul>
  `,
  styles: ``
})
export class ListTechRadar {

  readonly technologies = input.required<Technology[]>()

}
