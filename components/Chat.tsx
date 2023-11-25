import React, { useEffect, useRef } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from './ui/button';
import { useUserStore } from '@/Store/userStore';
import { addMessage, getChatMessages } from '@/Database/firestore/firebaseDb';

export default function Chat() {
  const [message, setMessage] = React.useState('');
  const teamId = useUserStore((state) => state.currrentTeam?.value);
  const userId = useUserStore((state) => state.user?.uid);
  const [messageList, setMessageList] = React.useState<any[]>([]);
  const chatId = 'lufLNHlDAlaJqhVkkhar';

  const chatContainerRef = useRef(null);

  const fetchMessages = async () => {
    let list = await getChatMessages(teamId);
    setMessageList(list);
  };

  useEffect(() => {
    fetchMessages();
  }, []);

  useEffect(() => {
    // Scroll to the bottom whenever the messageList is updated
    scrollChatToBottom();
  }, [messageList]);

  const handleSendMessage = () => {
    addMessage(teamId, userId, message).then(() => {
      fetchMessages();
    });
    setMessage('');
  };
 
  const scrollChatToBottom = () => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  };

  return (
    <div className="w-[650px] border border-gray-700 px-5 rounded-lg mx-auto mb-6">
      <div className="flex flex-col h-[240px] overflow-y-auto" ref={chatContainerRef}>
      {messageList.map((item) => {
      const className = `chat-message ${item.userId === userId ? 'right' : 'left'}`;
      console.log(className); // Log class name to check
      return (
      <div key={item.id} className={className}>
        <p className="text-white">{item.text}</p>
      </div>
  );
})}
      </div>

      <div className="flex flex-row pt-5 justify-between mb-2">
        <Input
          placeholder="Type here..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <Button
          className="ml-5"
          onClick={handleSendMessage}
          title="Send"
        >
          Send
        </Button>
      </div>
    </div>
  );
}
