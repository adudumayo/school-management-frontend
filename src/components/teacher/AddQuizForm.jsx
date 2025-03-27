import { useState } from 'react';

function AddQuizForm(){
  const [subject, setSubject] = useState('testSubject');
  const [topic, setTopic] = useState('testTopic');
  const [question, setQuestion] = useState('testQuestion');
  const [due_date, setDue_date] = useState("9999-12-31 20:59:59");

  const postQuiz = (event) => {
    event.preventDefault();
    fetch("http://localhost:8080/quizzes", 
      {
        method: "POST",
        body: JSON.stringify(
          {
            subject: subject,
            topic: topic,
            question: question,
            due_date: due_date
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
      <h1>Add A Quiz As A Teacher</h1>
      <label>
        <input 
          type="text" 
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
        />
      </label>

      <br></br>
      <label>
        <input
          type="text"
          value={topic}
          onChange={(e) => setTopic(e.target.value)}
        />
      </label>
      
      <br></br>
      <label>
        <input
          type="text"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
        />
      </label>

      <br></br>
      <label>
        <input
          type="text"
          value={due_date}
          onChange={(e) => setDue_date(e.target.value)}
        />
      </label>


      <br></br>
      <input type="submit" />
    </form>
  );
}

export default AddQuizForm;
