import { useEffect } from "react";
import { Link } from "react-router-dom";
import {
        MDBCard,
        MDBCardBody,
        MDBCardTitle,
        MDBCardText,
        MDBCardImage,
        MDBRipple,
        MDBBtn
      } from 'mdb-react-ui-kit';
import { useNavigate } from 'react-router-dom';
import Editcourse from "./Editcourse";
import axios from 'axios';
import Usernavbar from "./Usernavbar";
import { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import '../index.css'

function importAll(r) {
        let images = {};
        r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
        return images;
      }

const Userenrolled = () => {
        
        const navigate = useNavigate();
        const title = "Enrolled Courses"
        const courses = JSON.parse(localStorage.getItem("courses"));
        var [enrolledCourses, setEnrolledCourses] = useState(courses)
        const editCourse = (course) =>{
                navigate('/user/editCourse',{state:{'currentCourse':course}})
        }

        const deleteCourse = (id) => {                
                const courses = JSON.parse(localStorage.getItem("courses"));
                const result = courses.filter(course => course.id !== id);
                setEnrolledCourses(result)
                localStorage.setItem("courses", JSON.stringify(result))
                toast.success('Course deleted successfully!', {
                        position: "top-right",
                        autoClose: 2000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                });
        }

        const images = importAll(require.context('../images/courses', false, /\.(png|jpe?g|svg)$/));
        const names = Object.values(images)
        
        return ( 
                <div className="course-list container">
                        <Usernavbar />
                        <ToastContainer />
                        <div className="row">
                                <div className="col-sm-8">
                                        <h2>{ title }</h2>
                                </div>
                           
                        </div>
                        <div className="row">
                        {  enrolledCourses.map((course)=>(
                                <div className="course-preview col-sm-4" key={ course.id }>
                                        <MDBCard class="card-style">
                                        <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
                                                <MDBCardImage 
                                                        src={names[Math.floor(Math.random() * names.length)]} fluid />
                                                <a>
                                                <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
                                                </a>
                                        </MDBRipple>
                                                <MDBCardBody>
                                                        <MDBCardText>Institute Name: {  course.instituteName }</MDBCardText>
                                                        <MDBCardText>
                                                               Course: { course.courseName }
                                                        </MDBCardText>
                                                        <MDBCardText>
                                                                Mobile : { course.mobileNumber } 
                                                        </MDBCardText>
                                                        <MDBCardText>
                                                               Student Email: { course.studentEmail }
                                                        </MDBCardText>
                                                        <MDBCardText>
                                                               Student Name: { course.studentName }
                                                        </MDBCardText>
                                                        <MDBCardText>
                                                               Institue Location: { course.instituteLocation }
                                                        </MDBCardText>
                                                        <div className="row">
                                                                <div className="col-sm-4">
                                                                        <MDBBtn class="button-style" onClick={()=>editCourse(course)}>Edit</MDBBtn>
                                                                </div>
                                                                <div className="col-sm-4">
                                                                        <MDBBtn class="button-style" onClick={()=>deleteCourse(course.id)}>Delete</MDBBtn>
                                                                </div>
                                                                
                                                                
                                                        </div>
                                                </MDBCardBody>
                                        </MDBCard>
                                </div>
                         ))}
                        </div>
                         
                </div>
         );
}
 
export default Userenrolled;