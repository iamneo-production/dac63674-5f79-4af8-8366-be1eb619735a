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
import useFetch from './useFetch'
import { ToastContainer, toast } from 'react-toastify';
import '../index.css'


const Usereditcourse = () => {

        const navigate = useNavigate()
        const location = useLocation();
       
       const course = location.state.currentCourse;
        const coursenames = JSON.parse(localStorage.getItem('coursenames'));
        const institutes = JSON.parse(localStorage.getItem('institutes'));

        const [studentName, setStudentName] = useState(course.studentName);
        const [mobileNumber, setMobileNumber] = useState(course.mobileNumber)
        const [courseName, setCourseName] = useState(course.courseName);
        const [studentEmail, setStudentEmail] = useState(course.studentEmail)
        const [instituteName, setInstituteName] = useState(course.instituteName)
        const [instituteLocation, setInstituteLocation] = useState(course.instituteLocation)
        const [isPending, setIsPending] = useState("")
        const [error, setError] = useState("")
     
       
        const updateCourse = (e) =>{
                e.preventDefault();
                const regexExp = /^[6-9]\d{9}$/gi;


                if(regexExp.test(mobileNumber)){
                        const body = {
                                "id": course.id,
                                "studentName": studentName,
                                "mobileNumber": mobileNumber,
                                "courseName": courseName,
                                "studentEmail": studentEmail,
                                "instituteName": instituteName,
                                "instituteLocation": instituteLocation
                        }
                        const courses = JSON.parse(localStorage.getItem('courses'))
                        for (var i = 0; i < courses.length; i++) 
                        { 
                                courses[i] = body;
                        }
                        toast.success('Course edited successfully!', {
                                position: "top-right",
                                autoClose: 2000,
                                hideProgressBar: false,
                                closeOnClick: true,
                                pauseOnHover: true,
                                draggable: true,
                                progress: undefined,
                        });
                        localStorage.setItem("courses", JSON.stringify(courses));
                        setTimeout(() => {
                                navigate('/user/enrolledCourses') 
                        }, 2000);
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
                        <div className="col-sm-6 card-style">
                                <form onSubmit={updateCourse}>
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
                                                                coursenames.map((course) => (
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
                                                Update
                                        </MDBBtn>

                                        
                                </form>
                        </div>
                </div>
                
        </div>
    
  );
}

export default Usereditcourse;