import {Component, input, OnInit, output} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {User, UserRole} from '../../user.types';
import {UpperCasePipe} from '@angular/common';

@Component({
  selector: 'app-add-user-template-form',
  imports: [
    FormsModule,
    UpperCasePipe
  ],
  template: `
    <form (ngSubmit)="onSubmit()" #userForm="ngForm">
      <div class="form-group">
        <label for="username">Name</label>
        <input type="text" id="username" required [(ngModel)]="model.username" name="username"
               #username="ngModel">
        <div [hidden]="username.valid || username.pristine"
             class="alert alert-danger">
          Name is required
        </div>
      </div>
      <div class="form-group">
        <label for="email">Email</label>
        <input type="text" id="email"
               [(ngModel)]="model.email" name="email">
      </div>
      <div class="form-group">
        <label for="role">User Role</label>
        <select id="role"
                required [(ngModel)]="model.role" name="role"
                #role="ngModel">
          @for (role of roles; track $index) {
            <option [value]="role">{{ role | uppercase }}</option>
          }
        </select>
        <div [hidden]="role.valid || role.pristine" class="alert alert-danger">
          Role is required
        </div>
      </div>
      <div class="form-group">
        <div>&nbsp;</div>
        <button type="submit" [disabled]="!userForm.form.valid">
          Submit
        </button>

      </div>
    </form>
  `,
  styles: `
    .form-group {
      display: flex;
      justify-content: space-between;
      padding-bottom: 0.5rem;
    }
  `
})
export class AddUserTemplateForm implements OnInit {

  prefilledModel = input<Partial<User>>();
  onFormSubmit = output<User>();

  public model = {
    username: '',
    email: '',
    role: ''
  };

  public roles = [...Object.values(UserRole)]

  ngOnInit(): void {
    this.model = {...this.model, ...this.prefilledModel()}
    console.log(this.roles)
  }

  onSubmit() {
    console.log('Form submitted')
    console.dir(this.model)

    if (this.model.email.includes('@')) {
      this.onFormSubmit.emit(this.model)
    } else {
      return;
    }
  }
}
