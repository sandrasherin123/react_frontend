import axios from "axios";

const API=axios.create({
    baseURL:"http://localhost:8080/api/students",
    headers:{"Content-Type":"application/json"}
});

export const addstudent=(student)=>{
    return API.post("/insert",student);
}