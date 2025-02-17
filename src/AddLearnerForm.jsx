import { useEffect, useState } from 'react';

function AddLearnerForm(){
  const [name, setName] = useState('');
  const [classVar, setClassVar] = useState('');
  const [average, setAverage] = useState('');

  return (
    <form>
      <label>
        <input type="text" value="name" />
      </label>
    </form>
  );
}

export default AddLearnerForm;
