import { useEffect } from "react";
import { Link } from "react-router-dom";
import {
        MDBCard,
        MDBCardBody,
        MDBCardTitle,
        MDBCardText,
        MDBCardImage,
        MDBRipple,
        MDBBtn,

      } from 'mdb-react-ui-kit';
import { useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';
import useFetch from './useFetch'
import Usernavbar  from "./Usernavbar";
import { ToastContainer, toast } from 'react-toastify';
import '../index.css'


function importAll(r) {
        let images = {};
        r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
        return images;
      }

const Listcourses = () => {
        
        const navigate = useNavigate();
        const location = useLocation();
        const courses = location.state.courses;
        const institutes = location.state.institutes;
        const enrollCourse = () =>{
                navigate('/user/enrollCourse',{state:{'courses':courses, 'institutes':institutes}})
        }
     
        const images = importAll(require.context('../images/courses', false, /\.(png|jpe?g|svg)$/));
        const names = Object.values(images)
        
        return ( 
                <div className="course-list container ">
                        <Usernavbar />
                        <ToastContainer />
                        <div className="row">
                                <div className="col-sm-8">
                                        <h2>All Courses</h2>
                                </div>
                                
                        </div>
                        <div className="row">
                        {  courses.map((course)=>(
                                <div className="course-preview col-sm-4" key={ course.courseId }>
                                        <MDBCard class="card-style">
                                        <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
                                                <MDBCardImage 
                                                        src={names[Math.floor(Math.random() * names.length)]} fluid />
                                                <a>
                                                <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
                                                </a>
                                        </MDBRipple>
                                                <MDBCardBody>

                                                        <MDBCardTitle>{  course.courseName }</MDBCardTitle>
                                                        <MDBCardText>
                                                                { course.courseDescription }
                                                        </MDBCardText>
                                                        <MDBCardText>
                                                                Duration : { course.courseDuration } months
                                                        </MDBCardText>
                                                        <div className="row">
                                                                
                                                                <div className="col-sm-4">
                                                                        <MDBBtn class="button-style" onClick={()=>enrollCourse()}>Enroll</MDBBtn>
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
 
export default Listcourses;