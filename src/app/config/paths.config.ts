import {NavigationItem} from '../components/navigation/navigation.type';

export const PATHS: { [key: string]: NavigationItem } = {
  HOME: {
    path: 'home',
    label: 'Home'
  },
  USER_MANAGEMENT: {
    path: 'user-management',
    label: 'UserService Management'
  },
  TECH_RADAR: {
    path: 'tech-radar',
    label: 'Tech Radar'
  }
}
