function TeacherOperations() {

  return (
    <>
      <form>
        <label>Choose An Operation:
          <input
            type="button"
            value="Mark Attendance"
            onClick={(e) => alert("Take the register")}
          />
          <input
            type="button"
            value="Create A Quiz"
            onClick={(e) => alert("Take the register")}
          />
          <input
            type="button"
            value="View Learners"
            onClick={(e) => alert("Take the register")}
          />
          <input
            type="button"
            value="Make An Announcement"
            onClick={(e) => alert("Take the register")}
          />
          <input
            type="button"
            value="Upload Resources"
            onClick={(e) => alert("Take the register")}
          />
          <input
            type="button"
            value="View Timetable"
            onClick={(e) => alert("Take the register")}
          />
        </label>
      </form>
    </>
  )
}

export default TeacherOperations;
