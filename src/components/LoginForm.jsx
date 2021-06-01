import { useState } from 'react';
import axios from 'axios';

const projectID = '1b12e8ad-4e41-4ad6-8694-ef375fdb806d';

const Modal = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    // enter user name / creds  if all good engine aproves and user is logged in
    //if error = try again  so it come authentification, if user and pass found 

    const authObject = {
       'Project-ID': projectID, 
       'User-Name': username, 
       'User-Secret': password 
      };

    try {
  await axios.get('https://api.chatengine.io/chats', 
  { headers: authObject });
// approved  - logs in
      localStorage.setItem('username', username);
      localStorage.setItem('password', password);

      window.location.reload();
      setError('');
    } catch (err) {
      setError('Oops, try again.');  
    }
  };

  return (
    <div className="wrapper">
      <div className="form">
        <h1 className="title">Chat Application</h1>
        <form onSubmit={handleSubmit}>
          <input type="text" value={username}
           onChange={(e) => setUsername(e.target.value)} 
           className="input" placeholder="Username" required />
          <input type="password" value={password} 
          onChange={(e) => setPassword(e.target.value)}
           className="input" placeholder="Password" required />
          <div align="center">
            <button type="submit" className="button">
              <span>Start Chatting</span>
            </button>
          </div>
        </form>
        <h1>{error}</h1>
      </div>
    </div>

  );
};

export default Modal;