import React from 'react';
import { useEffect, useState } from 'react';

const Chat = ({ supabase }) => {
  console.log('SUPABASE', supabase);

  const [messages, setMessages] = useState([]);

  //   the useEffect is synchronous to prevent race conditions
  // this is why it's getting underlined here - but it works fine ;)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(async () => {
    const getMessages = async () => {
      let { data: messages, error } = await supabase
        .from('message')
        .select('*');
      console.log('MESSAGES', messages);
      console.log('error is: ', error);
      setMessages(messages);
    };
    await getMessages();
  }, [messages, supabase]);

  return (
    <div className='flex flex-col text-paleBeige items-center justify-center'>
      <div>
        {messages?.map((message) => (
          <div key={message.id} className='bg-deepBlue p-4 m-2 rounded-xl'>{message.content}</div>
        ))}
      </div>
    </div>
  );
};

export default Chat;
