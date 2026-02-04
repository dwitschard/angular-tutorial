import {Component, inject} from '@angular/core';
import {UserList} from '../../features/user-management/smart_container/user-list/user-list';
import {AddUser} from '../../features/user-management/smart_container/add-user/add-user';
import {Router, RouterOutlet} from '@angular/router';
import {PATHS} from '../../config/paths.config';

@Component({
  imports: [
    UserList,
    AddUser,
    RouterOutlet,
  ],
  template: `
    <h1>User Management</h1>
    <div class="user-mgmt-dashboard">
      <app-user-list></app-user-list>
      <app-add-user/>

      @if (showSubRouter) {
        <div>
          <h1>Sub Route</h1>
          <router-outlet/>
        </div>
      }
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
export class UserManagementPage {

  readonly router = inject(Router)

  showSubRouter = this.router.url
    .substring(this.router.url.lastIndexOf('/') + 1) !== PATHS['USER_MANAGEMENT'].path;
}
