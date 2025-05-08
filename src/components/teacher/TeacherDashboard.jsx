import { useEffect, useState } from 'react';

function TeacherDashboard() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loginResponse, setLoginResponse] = useState('');

  useEffect(() => {
    fetch(`http://localhost:8080/teacher_login/username/${username}/password/${password}`)
      .then((res) => res.json())
      .then((data) => setLoginResponse(data))
      .catch((err) => console.error("Error logging the user in:", err));
  }, []);

  if (loginResponse == "Approved") {
    return (
      <>
        <p>Login Went Well Welcome</p>
      </>
    )
  } else {
    return (
      <>
        <p>Something went wrong somehow, FIX IT!</p>
      </>
    )
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
