import { useState } from "react";
import axios from "axios";

const LoginForm = () =>{
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit =  (event) =>{
    event.preventDefault();
    const authObject = {
      'Project-ID':"559b2826-3b56-410b-95db-f2b531794675",
      'User-Name':username,
      'User-Secret':password
    };
    try {
      axios.get('https://api.chatengine.io/chats', {headers: authObject});
      localStorage.setItem('username', username);
      localStorage.setItem('password', password);

      window.location.reload()
    } catch (error) {
      setError('Credenciais inválidas, corrija e tente novamente')
    }
  }

  return(
    <div className="wrapper">
      <div className="form">
        <h1 className="title">Just Chatting</h1>
        <form onSubmit={handleSubmit}>
          <input 
            className="input"
            placeholder="Usuário"
            required
            type='text' 
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input 
            className="input"
            placeholder="Senha"
            required
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <div aling="center">
            <button type="submit" className="button">
              <span>Let's Chat</span>
            </button>
          </div>
          <h2 className="error">{error}</h2>
        </form>
      </div>
    </div>
  )
}

export default LoginForm;