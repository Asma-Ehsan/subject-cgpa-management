import { useState } from 'react'
import './App.css'
import SubjectForm from './components/SubjectForm'
import SubjectList from './components/SubjectList';


function App() {
  const [subjects, setSubjects] = useState([]);
  const [editingSubject, setEditingSubject] = useState(null);

  const addSubject = (newSubject) => {
    setSubjects([...subjects, newSubject]);
    
  };

  const handleDelete = (codeToDelete) => {
    const updatedList = subjects.filter((subj) => {
      return subj.code !== codeToDelete
    });
    setSubjects(updatedList);
  };

  const handleEdit = (subjectToEdit) => {
    setEditingSubject(subjectToEdit);
  };

  const gradeScale = {
    'A': 4.0,
    'B+': 3.5,
    'B': 3.0,
    'C+': 2.5,
    'C': 2.0,
    'D': 1.5,
    'F': 0
  };

  const handleGradeChange = (code, newGrade) => {
    const updatedList = subjects.map((subj) => {
      if (subj.code === code) {
        return { ...subj, grade: newGrade };
      }
      return subj;
    });
  
    setSubjects(updatedList);
  };

  const calculateCGPA = () => {
    let totalPoints = 0;
    let totalCredits = 0;
  
    subjects.forEach((subj) => {
      const gradePoint = gradeScale[subj.grade];
      if (gradePoint !== undefined && subj.creditHrs) {
        totalPoints += gradePoint * Number(subj.creditHrs);
        totalCredits += Number(subj.creditHrs);
      }
    });
  
    return totalCredits > 0 ? (totalPoints / totalCredits).toFixed(2) : "N/A";
  };
  
  


  return (
    <>
    <div className="container">
    <h2>Current CGPA: {calculateCGPA()}</h2>

       <SubjectForm addSubject = {addSubject} 
                    editingSubject = {editingSubject} 
                    setEditingSubject = {setEditingSubject} 
                    subjects = {subjects} 
                    setSubjects = {setSubjects}/>
 
       <SubjectList subjects={subjects}
                    handleEdit={handleEdit}
                    handleDelete={handleDelete}
                    handleGradeChange={handleGradeChange}/>
    </div>
    </>
  )
}

export default App
