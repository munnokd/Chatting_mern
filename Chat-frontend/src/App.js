import './App.css';
import Sidebar from "./Sidebar"
import Chat from "./Chat"
import { useEffect, useState } from 'react';
import Pusher from 'pusher-js'
import axios from './axios'

function App() {
  const [messages,setMessages]=useState([]);

  useEffect(()=>{
    axios.get('/messages/sync').then((response)=>{
      setMessages(response.data)
    })
  },[])

  useEffect(()=>{
    const pusher = new Pusher('818ac6c0b5e8c7570b6f', {
      cluster: 'ap2'
    });

    const channel = pusher.subscribe('messages');
    channel.bind('inserted', function(newMessage) {
      setMessages([...messages,newMessage]);
    })

    return()=>{
      channel.unbind_all();
      channel.unsubscribe();
    }
    
  },[messages]);
  console.log(messages)

  return (
    <div className="app">
    <div className="app__body">
      <Sidebar/>
      <Chat messages={messages}/>
    </div>
      
    </div>
  );
}

export default App;
