import React from 'react';
import {
  MDBInput,
  MDBCol,
  MDBRow,
  MDBCheckbox,
  MDBBtn,
  MDBIcon,
  
} from 'mdb-react-ui-kit';
import Navbar from './Navbar';
import axios from 'axios';
import { useNavigate, useLocation } from 'react-router-dom';
import Usernavbar from './Usernavbar'
import { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import '../index.css'

export default function Enrollcourse() {

        const navigate = useNavigate()
        const location = useLocation();
        const courses = location.state.courses;
        const institutes = location.state.institutes;
        const [studentName, setStudentName] = useState("");
        const [mobileNumber, setMobileNumber] = useState("")
        const [courseName, setCourseName] = useState("");
        const [studentEmail, setStudentEmail] = useState("")
        const [instituteName, setInstituteName] = useState("")
        const [instituteLocation, setInstituteLocation] = useState("")
        const [isPending, setIsPending] = useState("")
        const [error, setError] = useState("")

        const enrollCourse = (e) =>{
                e.preventDefault();

                var courses = JSON.parse(localStorage.getItem("courses"));
                let id = Math.floor((Math.random() * 100000000) + 1).toString();
                const regexExp = /^[6-9]\d{9}$/gi;


                if(regexExp.test(mobileNumber)){
                        const body = {
                                "id": id,
                                "studentName": studentName,
                                "mobileNumber": mobileNumber,
                                "courseName": courseName,
                                "studentEmail": studentEmail,
                                "instituteName": instituteName,
                                "instituteLocation": instituteLocation
                        }
                        if(courses){
                                courses.push(body)
                                localStorage.setItem("courses", JSON.stringify(courses));
                                console.log( courses)
                        }
                        else{
                                courses = []
                                courses.push(body)
                                localStorage.setItem("courses",JSON.stringify(courses))
                                console.log(localStorage.getItem("courses"))
                        }
                      
        
                        axios.post('http://localhost:8080/enroll', body)
                        .then(res => {
                                console.log(res)
                                if(res.status!=200){
                                        throw Error("unable to enroll")
                                }
                                return res.data
                        })
                        .then((data)=>{
                                console.log(data);
                                setIsPending(false)
                                setError(null)
                                toast.success(' Course enrolled successfully', {
                                        position: "top-right",
                                        autoClose: 2000,
                                        hideProgressBar: false,
                                        closeOnClick: true,
                                        pauseOnHover: true,
                                        draggable: true,
                                        progress: undefined,
                                        });
                        })
                        .catch((e)=>{
                                setError(e.message);
                                setIsPending(false);
                                toast.error(e.message, {
                                        position: "top-right",
                                        autoClose: 2000,
                                        hideProgressBar: false,
                                        closeOnClick: true,
                                        pauseOnHover: true,
                                        draggable: true,
                                        progress: undefined,
                                });
                        })
                        setTimeout(() => {
                                navigate('/user/enrolledCourses') 
                        }, 1000);
                }else{
                        toast.info("Enter a valid mobile number", {
                                position: "top-right",
                                autoClose: 5000,
                                hideProgressBar: false,
                                closeOnClick: true,
                                pauseOnHover: true,
                                draggable: true,
                                progress: undefined,
                          });
                }
                
        }

  return (
        <div className="container">
                <Usernavbar />
                <ToastContainer />
                <div className="row">
                        <div className="col-sm-3"></div>
                        <div className="col-sm-6 ">
                                <form onSubmit={enrollCourse}>
                                        <h2 className="text-center">Enroll</h2>
                                        <br />
                                        <MDBRow className='mb-4'>
                                                <select required class="mdb-select md-form mb-4" value={instituteName}  onChange={(e) => setInstituteName(e.target.value)}>
                                                        <option value="" disabled selected>Choose Institute Name</option>

                                                        {
                                                                institutes.map((institute) => (
                                                                        <option value={institute.instituteName}  key={ institute.instituteId }>{institute.instituteName}</option>
                                                                ))
                                                        }
                                                </select>
                                                <select required class="mdb-select md-form mb-4" value={courseName}  onChange={(e) => setCourseName(e.target.value)}>
                                                        <option value="" disabled selected>Choose Course Name</option>
                                                        {
                                                                courses.map((course) => (
                                                                        <option value={course.courseName}  key={ course.courseId }>{course.courseName}</option>
                                                                ))
                                                        }
                                                </select>
                                               
                                        </MDBRow>
                                        <MDBInput 
                                                className='mb-4' 
                                                type='email' 
                                                id='email' 
                                                label='Student Email' 
                                                value={studentEmail}  
                                                onChange={(e) => setStudentEmail(e.target.value)}
                                                required
                                        />
                                        <MDBInput 
                                                className='mb-4' 
                                                type='text' 
                                                id='name' 
                                                label='Student Name' 
                                                value={ studentName }
                                                onChange={(e) => setStudentName(e.target.value)}
                                                required
                                        />
                                        <MDBInput 
                                                className='mb-4' 
                                                type='text' 
                                                id='mobile' 
                                                label='Mobile Number' 
                                                value={ mobileNumber }
                                                onChange={(e) => setMobileNumber(e.target.value)}
                                                required
                                        />
                                        <MDBInput 
                                                className='mb-4' 
                                                type='text' 
                                                id='address' 
                                                label='Institute Location' 
                                                value={ instituteLocation }
                                                onChange={(e) => setInstituteLocation(e.target.value)}
                                                required
                                        />

                                        
                                        <MDBBtn class="button-style" type='submit' className='mb-4' block >
                                                Enroll
                                        </MDBBtn>

                                        
                                </form>
                        </div>
                </div>
                
        </div>
    
  );
}