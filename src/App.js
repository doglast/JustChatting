import { ChatEngine } from 'react-chat-engine';
import './App.css';
import ChatFeed from './components/ChatFeed';

const App = () =>{
  return(
    <ChatEngine
      height="100vh"
      projectID="559b2826-3b56-410b-95db-f2b531794675"
      userName="DogLast"
      userSecret="des212425"
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps}/>}
    />
  )
}

export default App;