import { useState } from 'react';

function AddTeacherForm() {
  const [surname, setSurname] = useState("");
  const [username, setUsername] = useState("");
  const [title, setTitle] = useState("");
  const [password, setPassword] = useState("");

  const AddTeacherRequest = () => {
    fetch("http://localhost:8080/teachers", 
      {
        method: "POST",
        body: JSON.stringify(
          {
            surname: surname,
            username: username,
            title: title,
            password: password
          }
        ),
        headers: {
          "Content-type": "application/json",
        },
      })
      .then((res) => res.json())
      .then((json) => console.log(json));
  }


  return (
    <form onSubmit={AddTeacherRequest}>
      <label>Surname:
        <input
          type="text"
          value={surname}
          onChange={(e) => setSurname(e.target.value)}
        />
      </label>
      <label>Username:
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </label>
      <label>Title:
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="DROPDOWN"
        />
      </label>
      <label>Password:
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </label>
      <input type='submit' />
    </form>
    
  )
}
export default AddTeacherForm;
