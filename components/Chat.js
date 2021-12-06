import React from 'react';
import { useEffect, useState } from 'react';

const Chat = ({ supabase }) => {
  console.log('SUPABASE', supabase);

  //   the useEffect is synchronous to prevent race conditions
  // this is why it's getting underlined here - but it works fine ;)
  useEffect(async () => {
    const getMessages = async () => {
      let { data: messages, error } = await supabase
        .from('message')
        .select('*');
      console.log('MESSAGES', messages);
    };
    await getMessages();
  }, []);

  return <div></div>;
};

export default Chat;
