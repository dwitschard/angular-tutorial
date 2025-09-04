import {Injectable} from '@angular/core';
import {DUMMY_USERS} from '../users';
import {User} from '../user.types';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private _users = DUMMY_USERS

  get users(): User[] {
    return [...this._users];
  }

  addUser(user: User) {
    this._users.push(user);
  }

  deleteUser(user: User) {
    this._users = this._users.filter(element => element.email !== user.email)
  }

  updateUser(user: User) {
    const index = this._users.findIndex(element => element.email === user.email);
    this._users[index] = user;
  }
}
