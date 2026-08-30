'use client';

import { Conversation } from './ConversationSidebar';
import clsx from 'clsx';

interface ConversationItemProps {
  conversation: Conversation;
  isActive?: boolean;
  onClick: () => void;
}

const ConversationItem: React.FC<ConversationItemProps> = ({
  conversation,
  isActive,
  onClick
}) => {
  return (
    <div 
      onClick={onClick}
      className={clsx(`
        flex items-center gap-3 p-4 cursor-pointer transition
        hover:bg-gray-100
      `,
        isActive && "bg-blue-50 border-l-4 border-blue-500"
      )}
    >
      <div className="flex-1">
        <div className="flex justify-between items-center">
          <p className={clsx("font-medium", conversation.isUnread && "font-bold text-black")}>
            {conversation.name}
          </p>
          {conversation.isUnread && (
            <div className="w-3 h-3 bg-blue-500 rounded-full" />
          )}
        </div>
        <p className="text-sm text-gray-500 truncate">
          {conversation.lastMessage}
        </p>
      </div>
    </div>
  );
};

export default ConversationItem;
