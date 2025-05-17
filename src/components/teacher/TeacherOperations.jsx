import { useState } from 'react';

function TeacherOperations() {

  const [markRegister, setMarkRegister] = useState(false);
  const [createQuiz, setCreateQuiz] = useState(false);
  const [viewLearners, setViewLearners] = useState(false);
  const [makeAnnouncement, setMakeAnnouncement] = useState(false);
  const [uploadResources, setUploadResources] = useState(false);
  const [viewTimetable, setViewTimetable] = useState(false);

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
