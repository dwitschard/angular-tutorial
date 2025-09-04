import {Component, input, output} from '@angular/core';
import {User} from '../../user.types';
import {Badge} from '../../../../components/badge/badge';
import {ShortenerPipe} from '../../../../pipes/shortener-pipe';

@Component({
  selector: 'app-user-detail',
  imports: [
    Badge,
    ShortenerPipe
  ],
  template: `
    <div class="user-detail">
      <div (click)="userSelected.emit(user())">
        <span>{{ user().username | shortIt: 5  }}</span>
      </div>

      <div>
        <span>{{ user().email }}</span>
      </div>

      <div>
        <app-badge [color]="isAdmin(user()) ? 'primary' : 'light'" [text]="user().role"/>
      </div>

      <div>
        <button (click)="onUserDelete.emit(user())">X</button>
      </div>
    </div>
  `,
  styles: `
    .user-detail {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      align-items: center;
      gap: 1rem;
    }
  `
})
export class UserDetail {

  readonly user = input.required<User>()

  userSelected = output<User>();
  onUserDelete = output<User>();

  isAdmin(user: User) {
    return user.role === 'admin';
  }
}
