import React, { useEffect, useState } from 'react';
import io from 'socket.io-client';

import './Chat.scss';

const Chat = () => {
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState('');
    const socket = io('http://localhost:4000', {
        transports: ['websocket'], // Specify the transport type
        withCredentials: true, // Send cookies if needed
        extraHeaders: {
            'Authorization': 'Bearer yourAccessToken', // Include any custom headers
        },
    });

    useEffect(() => {
        socket.on('chat message', (msg) => {
            console.log('chat message', msg);
            setMessages((prevMessages) => [...prevMessages, msg]);
        });

        return () => {
            socket.disconnect();
        };
    }, [socket]);

    const handleSendMessage = () => {
        if (input.trim() !== '') {
            socket.emit('chat message', input);
            setInput('');
        }
    };

    return (
<div className='chat_main'>
  <ul>
    {messages.map((msg, index) => (
      <li key={index}>{msg}</li>
    ))}
  </ul>
  <div className='input-container'>
    <input
      type="text"
      value={input}
      onChange={(e) => setInput(e.target.value)}
    />
    <button onClick={handleSendMessage}>Send</button>
  </div>
</div>
    );
};

export default Chat;
