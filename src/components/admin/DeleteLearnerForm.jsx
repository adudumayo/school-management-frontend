import { useState } from 'react';

function DeleteLearnerForm () {
  const [id, setId] = useState(99);

  const deleteRequest = (event) => {
    event.preventDefault();
    fetch(`http://localhost:8080/learners/${id}`,
      {
        method: "DELETE",
        body: JSON.stringify(
          {
            id: id
          }
        ),
        headers: {
          "Content-type": "application/json",
        },
      })
      .then((res) => res.json())
      .then((json) => console.log(json));
  }

  return(
  <>
      <form onSubmit={deleteRequest}>
      <h1>Delete Learner As A Teacher</h1>
      <label>Id:
        <input
          type="number"
          value={id}
          onChange={(e) => setId(Number(e.target.value))}
          placeholder='id'
        />

        <br></br>

        <input type="submit" />
      </label>
    </form>
  </>);
}

export default DeleteLearnerForm;
