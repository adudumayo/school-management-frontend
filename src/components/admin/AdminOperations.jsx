import { useState } from "react";
import AddTeacherForm from './AddTeacherForm'

function RoleForm() {
  const [addingTeacher, setAddingTeacher] = useState(false);

  if (addingTeacher) {
    return <AddTeacherForm />
  }

  return (
    <>
      <form>
        <label>Choose An Operation:
          <input
            type="button"
            value="Add A Teacher"
            onClick={(e) => setAddingTeacher(true)}
          />
        </label>
      </form>
    </>
  )
}

export default RoleForm;
