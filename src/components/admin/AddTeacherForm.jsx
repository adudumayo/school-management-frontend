import { useState } from 'react';

function AddTeacherForm() {
  const [surname, setSurname] = ("");
  const [username, setUsername] = ("");
  const [title, setTitle] = ("");
  const [password, setPassword] = ("");

  const AddTeacherRequest = () => {
    alert("Perfecto");
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
