import { useState } from "react";
import PageUnderConstruction from './PageUnderConstruction'
import LearnerDashboard from './learner/LearnerDashboard'
import TeacherLogin from './teacher/TeacherLogin'
import ParentDashboard from './parent/ParentDashboard.jsx'

function RoleForm() {
  const [isTeacher, setIsTeacher] = useState(false);
  const [isLearner, setIsLearner] = useState(false);
  const [isParent, setIsParent] = useState(false);

  if (isTeacher) {
    return <TeacherLogin />
  } else if (isLearner) {
    return <PageUnderConstruction />
  } else if (isParent) {
    return <PageUnderConstruction />
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
        </label>
      </form>
    </>
  )
}

export default RoleForm;
