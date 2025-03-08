import React, { useState } from 'react';

const RegistrationForm = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('User Registered:', { username, email, password });

    // Reset the form after submission
    setUsername('');
    setEmail('');
    setPassword('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Register</h2>

      <div>
        <label>Username:</label>
        <input
          type="text"
          name="username"
          value={username} // ✅ Ensures input is controlled
          onChange={(e) => setUsername(e.target.value)}
          required
        />
      </div>

      <div>
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={email} // ✅ Ensures input is controlled
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>

      <div>
        <label>Password:</label>
        <input
          type="password"
          name="password"
          value={password} // ✅ Ensures input is controlled
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>

      <button type="submit">Register</button>
    </form>
  );
};

export default RegistrationForm;
