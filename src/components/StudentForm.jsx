
import { useState } from "react";
import { addstudent } from "../services/StudentService";

function StudentForm() {

    const [student, setStudent] = useState({
        student_name: "",
        student_class: "",
        stparent_name: "",
        parent_number: "",
        stplace: "",
        stemail: ""
    });

    // Handle input changes
    const handleChange = (e) => {
        const { name, value } = e.target;

        setStudent({
            ...student,
            [name]: value
        });
    };

    // Handle form submission
    const handleSubmit =async (e) => {
        e.preventDefault();

        const res=await addstudent(student);
        
        console.log(res.data);

        alert("Student details submitted!");

      
    };

    return (
        <div>
            <h2>Student Registration Form</h2>

            <form onSubmit={handleSubmit}>

                <label>Student Name</label>
                <input
                    type="text"
                    name="student_name"
                    value={student.student_name}
                    onChange={handleChange}
                    required
                />

                <br /><br />

                <label>Student Class</label>
                <input
                    type="text"
                    name="student_class"
                    value={student.student_class}
                    onChange={handleChange}
                    required
                />

                <br /><br />

                <label>Parent Name</label>
                <input
                    type="text"
                    name="stparent_name"
                    value={student.stparent_name}
                    onChange={handleChange}
                    required
                />

                <br /><br />

                <label>Parent Number</label>
                <input
                    type="tel"
                    name="parent_number"
                    value={student.parent_number}
                    onChange={handleChange}
                    required
                />

                <br /><br />

                <label>Place</label>
                <input
                    type="text"
                    name="stplace"
                    value={student.stplace}
                    onChange={handleChange}
                    required
                />

                <br /><br />

                <label>Email</label>
                <input
                    type="email"
                    name="stemail"
                    value={student.stemail}
                    onChange={handleChange}
                    required
                />

                <br /><br />

                <button type="submit">Submit</button>

            </form>

        </div>
    );
}

export default StudentForm;
