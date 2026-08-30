export const UserStatuses = {
  online: 'online',
  offline: 'offline',
  away: 'away'
} as const;

export type UserStatus = typeof UserStatuses[keyof typeof UserStatuses];

export interface User {
  id: string;
  name: string;
  email: string;
  status: UserStatus;
}
