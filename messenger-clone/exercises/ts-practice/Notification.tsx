'use client';

import { Message } from './types';
import { formatPreview } from './utils';

interface NotificationProps {
  message: Message;
}

const Notification: React.FC<NotificationProps> = ({ message }) => {
  return (
    <div
      className="
        w-[300px]
        h-[100px]
        border-[1px]
        border-gray-300
        rounded-lg
        shadow-md
        p-4
        flex
        flex-col
        justify-between
        cursor-pointer
        hover:shadow-lg
        transition
        duration-200
        relative
      "
    >
      <div className="flex justify-between items-start">
        <p className="font-semibold text-gray-900 text-sm">
          {message.sender}
        </p>
        {!message.isRead && (
          <div className="h-2 w-2 bg-sky-500 rounded-full" />
        )}
      </div>

      <p className="text-gray-500 text-sm truncate">
        {formatPreview(message)}
      </p>

      <div className="text-[10px] text-gray-400 self-end">
        {new Date(message.timestamp).toLocaleTimeString()}
      </div>
    </div>
  );
}

export default Notification;