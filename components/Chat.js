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
    <div className='flex flex-col bg-deepBlue p-4 m-4 text-paleBeige items-center rounded-xl'>
      {messages?.map((message) => (
        <div key={message.id}>{message.content}</div>
      ))}
    </div>
  );
};

export default Chat;
