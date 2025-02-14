import { useEffect, useState } from "react";

function LearnersList() {
  const [learners, setLearners] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/learners")
      .then((res) => res.json())
      .then((data) => setLearners(data))
      .catch((err) => console.error("Error fetching learners:", err));
  }, []);

  return (
    <div>
      <h2>List of Learners</h2>
      <ul>
        {learners.map((learner) => (
          <li key={learner.id}>{learner.name} is the name</li>
        ))}
      </ul>
    </div>
  );
}

export default LearnersList;

