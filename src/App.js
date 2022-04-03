import logo from './logo.svg';
import './App.css';
import Form from './form/Form';
import { useState } from 'react';

function App() {
  const [user, setUser] = useState(null);
  
  return (
    <div className="App">
        {user ? <h1>Hoşgeldiniz</h1> : <Form setUser={setUser} />}
    </div>
  );
}

export default App;
