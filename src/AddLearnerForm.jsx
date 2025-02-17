import { useEffect, useState } from 'react';

function AddLearnerForm(){
  const [name, setName] = useState('');
  const [classVar, setClassVar] = useState('');
  const [average, setAverage] = useState('');

  const postRequest = (event) => {
    event.preventDefault();
    alert(`Got the name: ${name}`);
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
