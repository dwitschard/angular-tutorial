import {Component} from '@angular/core';
import {UserList} from '../../features/user-management/smart_container/user-list/user-list';
import {AddUser} from '../../features/user-management/smart_container/add-user/add-user';

@Component({
  selector: 'app-user-management',
  imports: [
    UserList,
    AddUser,
  ],
  template: `
    <h1>User Management</h1>
    <div class="user-mgmt-dashboard">
      <app-user-list></app-user-list>
      <app-add-user/>
    </div>
  `,
  styles: `
    @media screen and (max-width: 1024px) {
      .user-mgmt-dashboard {
        display: flex;
        flex-direction: column;
      }
    }

    @media screen and (min-width: 1025px) {
      .user-mgmt-dashboard {
        display: grid;
        grid-template-columns: 4fr 3fr;
        gap: 2rem;
      }
    }
  `
})
export class UserManagement {

}
