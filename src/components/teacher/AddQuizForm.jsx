import { useState } from 'react';

function AddQuizForm(){
  const [subject, setSubject] = useState('');

  const postQuiz = () => {
    fetch("http://localhost:8080/quizzes", 
      {
        method: "POST",
        body: JSON.stringify(
          {
            subject: subject
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
    <form onSubmit={postQuiz}>
      <label>
        <input 
          type="text" 
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
        />
      </label>
      <input type="submit" />
    </form>
  );
}

export default AddQuizForm;
