import { use, useState } from "react";

function RoleForm() {
  const [isTeacher, setIsTeacher] = useState(false);
  const [isLearner, setIsLearner] = useState(false);
  const [isParent, setIsParent] = useState(false);

  return (
    <>
      <form>
        <label>Choose Your Role:
          <input
            type="button"
            value="Teacher"
          />
          <input
            type="button"
            value="Learner"
          />
          <input
            type="button"
            value="Parent"
          />
        </label>
      </form>
    </>
  )
}

export default RoleForm;
