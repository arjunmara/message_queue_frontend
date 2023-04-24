import { useEffect, useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import io from 'socket.io-client';

const socket = io.connect('http://localhost:8081');

function App() {
  const [messages, setMessages] = useState([]);
  useEffect(() => {
    socket &&
      socket.on('products', (data) => {
        console.log(data);
        setMessages(JSON.parse(data));
      });
  }, [socket]);
  return (
    <>
      <div>Messages</div>
      <div>
        {messages.map((i) => (
          <>
            <p>{i.name}</p>
            <span>{i.priority}</span>
          </>
        ))}
      </div>
    </>
  );
}

export default App;
