import {Component, inject} from '@angular/core';
import {AddUserTemplateForm} from '../../dumb_components/add-user-template-form/add-user-template-form';
import {AddUserReactiveForm} from '../../dumb_components/add-user-reactive-form/add-user-reactive-form';
import {User, UserRole} from '../../user.types';
import {UserService} from '../../services/user.service';

@Component({
  selector: 'app-add-user',
  imports: [
    AddUserTemplateForm,
    AddUserReactiveForm
  ],
  template: `

    <h3>Add User</h3>

    <h4>Template Form</h4>
    <app-add-user-template-form [prefilledModel]="getPrefilledUserValue()"/>

    <h4>Reactive Form</h4>
    <app-add-user-reactive-form (onFormSubmit)="storeUser($event)"/>

  `,
  styles: `
  `
})
export class AddUser {

  private userService = inject(UserService)

  getPrefilledUserValue(): Partial<User> {
    return {
      username: 'Prefilled',
    }
  }

  storeUser(user: User) {
    this.userService.addUser(user);
  }
}
