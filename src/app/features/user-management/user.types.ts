export interface User {
  username: string;
  email: string;
  role: UserRole
}

export const UserRole = {
  ADMIN: 'admin',
  USER: 'user'
}

export type UserRole = typeof UserRole[keyof typeof UserRole];
