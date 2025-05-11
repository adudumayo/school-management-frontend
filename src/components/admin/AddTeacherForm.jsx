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
      <input type='submit' />
    </form>
    
  )
}
export default AddTeacherForm;
