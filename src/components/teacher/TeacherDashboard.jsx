import { useState } from 'react';

function TeacherDashboard() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const loginRequest = () => {
    alert("You are logged in")
  }
  
  return (
    <>
      <h1>Hello, Teacher</h1>

      <form onSubmit={loginRequest}>
        <label>Username:
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder='username'
            required
          />
        </label>

        <label>Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder='password'
            required
          />
        </label>
        <input type="submit" />
      </form>
    </>
  )
}

export default TeacherDashboard;
