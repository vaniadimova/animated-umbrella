import { ChatEngine } from 'react-chat-engine';
import LoginForm from './components/LoginForm'
import  ChatFeed from './components/ChatFeed';


import './App.css';


const App = () => {

  if (!localStorage.getItem('username')) return  <LoginForm />

  return (
    <ChatEngine
            height="100vh"
            projectID="1b12e8ad-4e41-4ad6-8694-ef375fdb806d"
            static 
            userName= { localStorage.getItem('username')}
            userSecret= {localStorage.getItem('password')}
            renderChatFeed={(chatAppProps) => 
     <ChatFeed {...chatAppProps } />}
            
            />
     );
}

export default App

