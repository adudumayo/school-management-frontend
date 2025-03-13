import './App.css';
import LearnersList from './components/admin/LearnersList';
import AddLearnerForm from './components/admin/AddLearnerForm';

function App() {

  return (
    <>
      <p>
        Welcome to SMS, the best School Management System  
      </p>
      <LearnersList />
      <AddLearnerForm />
    </>
  )
}

export default App
