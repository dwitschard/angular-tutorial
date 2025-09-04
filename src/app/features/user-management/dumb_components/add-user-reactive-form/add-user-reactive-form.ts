import {Component, inject, output} from '@angular/core';
import {FormBuilder, ReactiveFormsModule, Validators} from '@angular/forms';
import {UpperCasePipe} from '@angular/common';
import {User, UserRole} from '../../user.types';

@Component({
  selector: 'app-add-user-reactive-form',
  imports: [ReactiveFormsModule, UpperCasePipe],
  template: `
    <form [formGroup]="userForm" class="user-form" (ngSubmit)="submitForm()">
      <label for="username">Username: </label>
      <input id="username" type="text" formControlName="username"/>

      <label for="email">E-Mail: </label>
      <input id="email" type="email" formControlName="email"/>

      <label for="role">Role: </label>
      <select id="role" name="role" formControlName="role">
        @for (role of roles; track $index) {
          <option [value]="role">{{ role | uppercase }}</option>
        }
      </select>

      <div>&nbsp;</div>
      <button type="submit" [disabled]="!isFormValid()">
        Submit
      </button>
    </form>
  `,
  styles: `
    .user-form {
      display: grid;
      grid-template-columns: 1fr 1fr;
      row-gap: 0.5rem;
    }
  `
})
export class AddUserReactiveForm {

  private formBuilder = inject(FormBuilder);

  onFormSubmit = output<User>();

  roles = Object.values(UserRole)

  userForm = this.formBuilder.group({
    username: ['', Validators.required],
    email: ['', [Validators.email, Validators.required]],
    role: ['', [Validators.required]],
  });

  isFormValid() {
    return this.userForm.valid
  }

  submitForm() {
    if (this.userForm.valid) {
      this.onFormSubmit.emit(this.userForm.value as User)
    }
  }
}
