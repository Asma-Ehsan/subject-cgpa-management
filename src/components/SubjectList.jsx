import React from 'react'

const SubjectList = ({subjects, handleEdit, handleDelete, handleGradeChange}) => {
  return (
    <div>

      {subjects.map((subject, index) => (
  <div className="subject-card" key={index}>
    <p>{subject.name} - {subject.code}</p>
    <p>Credit Hours: {subject.creditHrs}  </p>
    <p>Instructor: {subject.instructorName}</p>
    <p>Grade: {subject.grade || "Not Set"}</p>
    <select
      value={subject.grade || ""}
      onChange={(e) => handleGradeChange(subject.code, e.target.value)}
    >
      <option value="">Select Grade</option>
      <option value="A">A</option>
      <option value="B+">B+</option>
      <option value="B">B</option>
      <option value="C+">C+</option>
      <option value="C">C</option>
      <option value="D">D</option>
      <option value="F">F</option>
    </select>

    <div className="button-group">
    <button className='edit-btn' onClick={() => handleEdit(subject)}>Edit</button>
    <button className='delete-btn' onClick={() => handleDelete(subject.code)}>Delete</button>
  </div>
  </div>
))}

    </div>
  )
}

export default SubjectList
