import { useState } from 'react';
import TeacherOperations from './TeacherOperations'

function TeacherLogin() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loginResponse, setLoginResponse] = useState('');

  const loginRequest = (e) => {
    e.preventDefault();

    fetch(`http://localhost:8080/teacher_login/username/${username}/password/${password}`)
      .then((res) => res.json())
      .then((data) => setLoginResponse(data))
      .catch((err) => console.error("Error logging the user in:", err));
  }

  if (loginResponse === "Approved") {
    return <TeacherOperations />
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


export default TeacherLogin;
