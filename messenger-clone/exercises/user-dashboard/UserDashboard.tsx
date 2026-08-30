'use client';

import { User } from './types';
import UserCard from './UserCard';

interface UserDashboardProps {
  users: User[]; // Utilisation du pluriel pour plus de clarté
}

const UserDashboard: React.FC<UserDashboardProps> = ({ users }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
      {users.map((user) => (
        <UserCard
          key={user.id}
          user={user}
        />
      ))}
    </div>
  );
};

export default UserDashboard;
