import { useState } from "react";
import PageUnderConstruction from './PageUnderConstruction'
import TeacherLogin from './teacher/TeacherLogin'
import AddTeacherForm from './admin/AddTeacherForm'
import AdminLogin from './admin/AdminLogin'

function RoleForm() {
  const [isTeacher, setIsTeacher] = useState(false);
  const [isLearner, setIsLearner] = useState(false);
  const [isParent, setIsParent] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);

  if (isTeacher) {
    return <TeacherLogin />
  } else if (isLearner) {
    return <PageUnderConstruction />
  } else if (isParent) {
    return <PageUnderConstruction />
  } else if (isAdmin) {
    return <AddTeacherForm />
  }

  return (
    <>
      <form>
        <label>Choose Your Role:
          <input
            type="button"
            value="Teacher"
            onClick={(e) => setIsTeacher(true)}
          />
          <input
            type="button"
            value="Learner"
            onClick={(e) => setIsLearner(true)}
          />
          <input
            type="button"
            value="Parent"
            onClick={(e) => setIsParent(true)}
          />
          <input
            type="button"
            value="Admin"
            onClick={(e) => setIsAdmin(true)}
          />
        </label>
      </form>
    </>
  )
}

export default RoleForm;
