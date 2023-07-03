import { useState } from 'react';

const RegistrationForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Lógica de registro: envía los datos al servidor para registrar al usuario
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={username} onChange={handleUsernameChange} placeholder="Username" />
      <input type="password" value={password} onChange={handlePasswordChange} placeholder="Password" />
      <button type="submit">Register</button>
    </form>
  );
};

export default RegistrationForm;
