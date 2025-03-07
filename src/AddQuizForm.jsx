import { useEffect, useState } from 'react';

function AddLearnerForm(){
  const [name, setName] = useState('');
  const [classVar, setClassVar] = useState('');
  const [average, setAverage] = useState('');

  const postRequest = (event) => {
    event.preventDefault();
    
    fetch("http://localhost:8080/learners", 
      {
        method: "POST",
        body: JSON.stringify(
          {
            name: name,
            class: 7,
            average: 78
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
    <form onSubmit={postRequest}>
      <label>
        <input 
          type="text" 
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <input type="submit" />
    </form>
  );
}

export default AddLearnerForm;
