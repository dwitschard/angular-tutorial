import {Component, inject, output} from '@angular/core';
import {FormBuilder, ReactiveFormsModule, Validators} from '@angular/forms';
import {JsonPipe, UpperCasePipe} from '@angular/common';
import {User, UserRole} from '../../user.types';
import {startWithUppercaseValidator} from '../../services/username.validator';
import {InputFieldError} from '../../../../components/input-field-error/input-field-error';

@Component({
  selector: 'app-add-user-reactive-form',
  imports: [ReactiveFormsModule, UpperCasePipe, JsonPipe, InputFieldError],
  template: `
    <form [formGroup]="userForm" class="user-form" (ngSubmit)="submitForm()">

      <div>
        <label for="username">Username: </label>
        <input id="username" type="text" formControlName="username"/>
        <app-input-field-error
          [showRawError]="true"
          [formField]="userForm.get('username')"
        />
      </div>

      <div>
        <label for="email">E-Mail: </label>
        <input id="email" type="email" formControlName="email"/>
        <app-input-field-error
          [showRawError]="true"
          [formField]="userForm.get('email')"
        />
      </div>

      <div>
        <label for="role">Role: </label>
        <select id="role" name="role" formControlName="role">
          @for (role of roles; track $index) {
            <option [value]="role">{{ role | uppercase }}</option>
          }
        </select>
        <pre>{{ userForm.get('role')?.errors  | json }}</pre>
      </div>

      <div>&nbsp;</div>
      <button type="submit" [disabled]="!isFormValid()">
        Submit
      </button>
    </form>
  `,
  styles: `
    .user-form {
      display: grid;
      grid-template-columns: 1fr;
      row-gap: 0.5rem;
    }

    .user-form > div {
      padding-top: 1rem;
      border-top: 1px solid #ccc;
    }
  `
})
export class AddUserReactiveForm {

  private formBuilder = inject(FormBuilder);

  onFormSubmit = output<User>();

  roles = Object.values(UserRole)

  userForm = this.formBuilder.group({
    username: ['', [Validators.required, startWithUppercaseValidator]],
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
