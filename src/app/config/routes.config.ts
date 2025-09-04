import {Route} from '@angular/router';
import {Home} from '../pages/home/home';
import {PATHS} from './paths.config';
import {UserManagement} from '../pages/user-management/user-management';
import {TechRadarDashboard} from '../features/tech-radar/pages/tech-radar-dashbaord/tech-radar-dashboard';

const {HOME, USER_MANAGEMENT, TECH_RADAR} = PATHS;

export const routes: Route[] = [
  {
    path: HOME.path,
    component: Home
  },
  {
    path: USER_MANAGEMENT.path,
    component: UserManagement
  },
  {
    path: USER_MANAGEMENT.path,
    component: UserManagement
  },
  {
    path: TECH_RADAR.path,
    component: TechRadarDashboard
  }
]
