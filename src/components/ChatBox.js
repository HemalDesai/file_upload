import React, { useState } from 'react';
import './ChatBox.css';

const ChatBox = () => {
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [response, setResponse] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (inputValue !== '') {
      setMessages([...messages, inputValue]);
      setResponse(`Hello`);
      setInputValue('');
    }
    
  };

  return (
    <div className="chatbox-container">
      <div className="messages-container">
        {messages.map((message, index) => (
          <div>
          <div className="message" key={index}>
            {message}
            
          </div>
          <div className='reply'>
          {response }
          </div>
          </div>
        ))}
        
      </div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Type a message..."
          value={inputValue}
          onChange={(event) => setInputValue(event.target.value)}
        />
        <button type="submit">Send</button>
      </form>
      
    </div>
  );
};

export default ChatBox;
