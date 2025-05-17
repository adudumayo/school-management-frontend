import { useState } from 'react';
import PageUnderConstruction from '../PageUnderConstruction'

function TeacherOperations() {

  const [markRegister, setMarkRegister] = useState(false);
  const [createQuiz, setCreateQuiz] = useState(false);
  const [viewLearners, setViewLearners] = useState(false);
  const [makeAnnouncement, setMakeAnnouncement] = useState(false);
  const [uploadResources, setUploadResources] = useState(false);
  const [viewTimetable, setViewTimetable] = useState(false);

  if (markRegister) {
    return <PageUnderConstruction />
  } else if (createQuiz) {
    return <PageUnderConstruction />
  } else if (viewLearners) {
    return <PageUnderConstruction />
  } else if (makeAnnouncement) {
    return <PageUnderConstruction />
  } else if (uploadResources) {
    return <PageUnderConstruction />
  } else if (viewTimetable) {
    return <PageUnderConstruction />
  }

  return (
    <>
      <form>
        <label>Choose An Operation:
          <input
            type="button"
            value="Mark Attendance"
            onClick={(e) => setMarkRegister(true)}
          />
          <input
            type="button"
            value="Create A Quiz"
            onClick={(e) => setCreateQuiz(true)}
          />
          <input
            type="button"
            value="View Learners"
            onClick={(e) => setViewLearners(true)}
          />
          <input
            type="button"
            value="Make An Announcement"
            onClick={(e) => setMakeAnnouncement(true)}
          />
          <input
            type="button"
            value="Upload Resources"
            onClick={(e) => setUploadResources(true)}
          />
          <input
            type="button"
            value="View Timetable"
            onClick={(e) => setViewTimetable(true)}
          />
        </label>
      </form>
    </>
  )
}

export default TeacherOperations;
