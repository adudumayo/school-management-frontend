import { useState } from "react";
import LearnerDashboard from './learner/LearnerDashboard'
import TeacherDashboard from './teacher/TeacherDashboard'

function RoleForm() {
  const [isTeacher, setIsTeacher] = useState(false);
  const [isLearner, setIsLearner] = useState(false);
  const [isParent, setIsParent] = useState(false);

  if (isTeacher) {
    return <TeacherDashboard />
  } else if (isLearner) {
    return <LearnerDashboard />
  } else if (isParent) {
    return <LearnerDashboard />
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
