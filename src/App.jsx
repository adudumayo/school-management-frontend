import './App.css';
import LearnersList from './components/admin/LearnersList';
import AddLearnerForm from './components/admin/AddLearnerForm';
import DeleteLearnerForm from './components/admin/DeleteLearnerForm';
import AddQuizFrom from './components/teacher/AddQuizForm';
import LearnerDashboard from './components/learner/LearnerDashboard';

function App() {

  return (
    <>
      <h1>
        Welcome to TriPort, the best School Management System  
      </h1>

      <LearnerDashboard />

      <LearnersList />

      <br></br>
      <AddLearnerForm />

      <br></br>
      <AddQuizFrom />
      <DeleteLearnerForm />
    </>
  )
}

export default App
