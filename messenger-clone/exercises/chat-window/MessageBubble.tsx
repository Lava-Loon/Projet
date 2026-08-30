import clsx from "clsx";

export interface Message {
  id: string;
  text: string;
  senderId: string;
  createdAt: Date;
  isOwn: boolean;

}


const MessageBubble = () => {
  return (
    <div
      className={clsx(
        'rounded-xl m-2 h-auto',
        isOwn ? 'bg-blue-500 right-auto' : 'bg-gray-400 left-auto' 

      )}
    >
      
    </div>
  );
}

export default MessageBubble;