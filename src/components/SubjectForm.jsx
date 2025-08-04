import React, { useEffect, useState } from 'react'

const SubjectForm = ({addSubject, editingSubject, setEditingSubject, subjects, setSubjects}) => {

    const [name, setName]= useState("")
    const [code, setCode]= useState("")
    const [creditHrs, setCreditHrs]= useState("")
    const [instructorName, setInstructorName]= useState("")
    const [grade, setGrade] = useState("");
    

    const handleSubmit = (event) => {
      event.preventDefault();

      const newSubject = {
        name,
        code,
        creditHrs,
        instructorName,
        grade
      };
      

      if(editingSubject){
        //updating existing list
        const updatedList = subjects.map((subjects) => {
          return subjects.code === editingSubject.code ? newSubject : subjects;
        });

        setSubjects(updatedList);
        setEditingSubject(null);
        alert("Subject Updated Successfully!");
      } else{
        addSubject(newSubject);
        alert("Subject added Successfully");
      }

      setName("");
      setCode("");
      setCreditHrs("");
      setInstructorName("");
      setGrade("");
    }

     useEffect(() => {
      if(editingSubject){
        setName(editingSubject.name);
        setCode(editingSubject.code);
        setCreditHrs(editingSubject.creditHrs);
        setInstructorName(editingSubject.instructorName);
        setGrade(editingSubject.grade);
      }
     }, [editingSubject]);
  

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Subject Name: 
         <input 
          id="subjectName"
          type="text"
          placeholder='Enter the name of the subject'
          required 
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        </label>
        
        <br/>

        <label>Subject Code: 
         <input 
          id="subjectCode"
          type="text"
          placeholder='Enter the code of the subject' 
          required
          value={code}
          onChange={(e) => setCode(e.target.value)}
        /> 
        </label> 
        
        <br/>
        <label>Credit Hours: 
         <input 
          id="creditHrs"
          type="text"
          placeholder='Enter the credit hours of the subject'
          required 
          value={creditHrs}
          onChange={(e) => setCreditHrs(e.target.value)}
        />
        </label>

        <br/>
        <label>Instructor Name: 
         <input 
          id="instructorName"
          type="text"
          placeholder='Enter the name of the instructor' 
          required
          value={instructorName}
          onChange={(e) => setInstructorName(e.target.value)}
        />
        </label>

        <br/>
        <label>Grade:
          <select required value={grade} onChange={(e) => setGrade(e.target.value)}>
            <option value="">Select Grade</option>
            <option value="A">A</option>
            <option value="B+">B+</option>
            <option value="B">B</option>
            <option value="C+">C+</option>
            <option value="C">C</option>
            <option value="D">D</option>
            <option value="F">F</option>
          </select>
      </label>

        
        <br/>
        <br/>
        <input type="submit" value={editingSubject ? "Update Subject" : "Add Subject"} />

        
      </form>
    </div>
  )
}

export default SubjectForm
