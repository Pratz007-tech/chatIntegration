import React, { useEffect, useState } from 'react';
import { StreamChat } from 'stream-chat';
import { Chat, Channel, ChannelHeader, ChannelList, LoadingIndicator, MessageInput, MessageList, Thread, Window } from 'stream-chat-react';

import 'stream-chat-react/dist/css/index.css';

//This is token for Pratiksha
const userToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoicHJhdGlrc2hhXzU4ZGFjMGNhLWI4ZjItNGY0ZS05NTg4LTE2ODA4YjY1MWY3NCJ9.DCST9bWokt0kCGWWHZ1XTyx1wwr79t2ml1X6bGiyOeA';

const filters = { type: 'messaging', members: { $in: ['pratiksha_58dac0ca-b8f2-4f4e-9588-16808b651f74'] } };
// const sort = { last_message_at: -1 };

const App = () => {
  const [chatClient, setChatClient] = useState(null);

  useEffect(() => {
    const initChat = async () => {
      const client = StreamChat.getInstance('sdxqnrzxsr99');

      await client.connectUser(
        {
          id: 'pratiksha_58dac0ca-b8f2-4f4e-9588-16808b651f74',
          name: 'pratiksha_58dac0ca-b8f2-4f4e-9588-16808b651f74'
        },
        userToken,
      );

      setChatClient(client);
    };

    initChat();
  }, []);

  if (!chatClient) {
    return <LoadingIndicator />;
  }

  return (
    <Chat client={chatClient} theme='messaging light'>
      <ChannelList filters={filters} />
      <Channel>
        <Window>
          <ChannelHeader />
          <MessageList />
          <MessageInput />
        </Window>
        <Thread />
      </Channel>
    </Chat>
  );
};

export default App;
