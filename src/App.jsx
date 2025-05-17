import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import RoleForm from './components/RoleForm';

function App() {

  return (
    <BrowserRouter>
      <h1>
        Welcome to TriPort, the best School Management System  
      </h1>

      <Routes>
        <Route path='/' element={<RoleForm />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
// TODO
// 1. Install the routing package and use it in the whole frontend
// 2. Figure out how to get the name or var and use it in another component
// 3. Start taking care of the code and use identifiers in the html tags, make styling less headache
// 4. Understand the Label in the form tag
// 5. Understand the e for event in the onClicks
