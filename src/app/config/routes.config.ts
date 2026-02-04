import {Route, Router} from '@angular/router';
import {Home} from '../pages/home/home';
import {PATHS} from './paths.config';
import {UserManagementPage} from '../pages/user-management/user-management-page.component';
import {TechRadarDashboard} from '../features/tech-radar/pages/tech-radar-dashbaord/tech-radar-dashboard';
import {
  AddUserReactiveForm
} from '../features/user-management/dumb_components/add-user-reactive-form/add-user-reactive-form';
import {inject} from '@angular/core';
import {CounterComponent} from '../features/counter/smart_components/counter/counter.component';

const {HOME, USER_MANAGEMENT, TECH_RADAR, COUNTER} = PATHS;

function adminRouteGuard() {
  return () => {
    const canActivate = true;

    if (!canActivate) {
      const router = inject(Router)
      router.navigate(['/user-management'])
    }
    return true
  };
}

export const routes: Route[] = [
  {
    path: HOME.path,
    component: Home
  },
  {
    path: USER_MANAGEMENT.path,
    component: UserManagementPage,
    children: [
      {
        path: 'tech-list', component: TechRadarDashboard,
        canActivate: [
          adminRouteGuard()
        ]
      }
    ],
  },
  {
    path: TECH_RADAR.path,
    component: TechRadarDashboard,
    canActivate: [
      adminRouteGuard()
    ]
  },
  {
    path: COUNTER.path,
    component: CounterComponent
  }
]
