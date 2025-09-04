import {Component, inject} from '@angular/core';
import {UserDetail} from '../../dumb_components/user-detail/user-detail';
import {User} from '../../user.types';
import {UserService} from '../../services/user.service';

@Component({
  selector: 'app-user-list',
  imports: [
    UserDetail
  ],
  template: `
    <h3>User List</h3>
    @for (user of fetchUsers(); track user.email) {
      <app-user-detail [user]="user" (onUserDelete)="deleteUser($event)" (userSelected)="selectUser(user)"></app-user-detail>
    }

    @if (selectedUser) {
      <h3>Selected User</h3>
      <app-user-detail [user]="selectedUser" ></app-user-detail>
      <button (click)="selectUser(null)">Reset</button>
    }

  `,
  styles: ``
})
export class UserList {
  private userService = inject(UserService)

  selectedUser: User | null = null;

  selectUser(user: User | null) {
    this.selectedUser = user;
  }

  fetchUsers() {
    return this.userService.users
  }

  deleteUser(user: User) {
    console.log('delete user')
    console.log(user)
    this.userService.deleteUser(user);
  }
}
