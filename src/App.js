import { useState } from 'react';

export default function App() {
  const [user, setUser] = useState('1');

  setUser('Testando!');
  return (
    <h1>
      Hello World!
      {user}
    </h1>
  );
}
