import './App.css';
import LearnersList from './components/admin/LearnersList';
import AddLearnerForm from './components/admin/AddLearnerForm';
import AddQuizFrom from './components/teacher/AddQuizForm';

function App() {

  return (
    <>
      <p>
        Welcome to SMS, the best School Management System  
      </p>
      <LearnersList />
      <AddLearnerForm />

      <br></br>
      <p>You can now add a quiz</p>
      <AddQuizFrom />
    </>
  )
}

export default App
