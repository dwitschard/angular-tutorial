import {input, Component} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'app-badge',
  imports: [
    NgClass
  ],
  template: `
    <div class="badge" [ngClass]="color()">
      {{text()}}
    </div>
  `,
  styles: `
    .badge {
        width: fit-content;
      padding: 0 .5rem;
      border-radius: .25rem;
      border: 1px solid #3b3b3b;

      &.primary {
        background-color: cadetblue;
      }

      &.secondary {
        background-color: lightblue;
      }

      &.light {
        background-color: lightgray;
      }
    }
  `
})
export class Badge {
  readonly text = input.required<string>()
  readonly color = input.required<'primary' | 'secondary' | 'light'>()
}
