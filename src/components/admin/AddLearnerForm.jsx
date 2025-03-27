import { useState } from 'react';

function AddLearnerForm(){
  const [name, setName] = useState('');
  const [classVar, setClassVar] = useState(1);
  const [average, setAverage] = useState(0.00);

  const postRequest = () => {
    fetch("http://localhost:8080/learners", 
      {
        method: "POST",
        body: JSON.stringify(
          {
            name: name,
            class: classVar,
            average: average
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
      <h1>Add A New Learner As Admin</h1>
      <label>Name:  
        <input 
          type="text" 
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder='name'
          required
        />
      </label>
    
      <br></br>

      <label>Class: 
        <input
          type="number"
          value={classVar}
          onChange={(e) => setClassVar(Number(e.target.value))}
          placeholder='class'
          required
        />
      </label>

      <br></br>

      <label>Average: 
        <input
          type="number"
          step="0.01"
          value={average}
          onChange={(e) => setAverage(Number(parseFloat(e.target.value).toFixed(2)))}
          placeholder='average'
        />
      </label>

      <br></br>

      <input type="submit" />
    </form>
  );
}

export default AddLearnerForm;
