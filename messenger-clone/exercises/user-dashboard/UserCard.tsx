'use client';

import { User } from "./types";
import clsx from "clsx";

interface UserCardProps {
  user: User;
}

const UserCard: React.FC<UserCardProps> = ({ user }) => {
  return (
    <div className="rounded-lg p-4 relative border border-gray-700 bg-gray-800">
      <h3 className="text-gray-200 font-semibold">
        {user.name}
      </h3>
      <p className="text-gray-400 text-sm">
        {user.email}
      </p>
      <span
        className={clsx(
          'absolute top-4 right-4 w-3 h-3 rounded-full',
          user.status === 'online' && 'bg-green-500',
          user.status === 'offline' && 'bg-gray-500',
          user.status === 'away' && 'bg-yellow-500'
        )}
      />
    </div>
  );
};

export default UserCard;
