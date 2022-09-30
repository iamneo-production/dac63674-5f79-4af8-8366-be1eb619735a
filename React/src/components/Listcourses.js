import { useEffect } from "react";
import { Link } from "react-router-dom";
import {
        MDBCard,
        MDBCardBody,
        MDBCardTitle,
        MDBCardText,
        MDBRipple,
        MDBCardImage,
        MDBBtn
      } from 'mdb-react-ui-kit';
import { useNavigate } from 'react-router-dom';
import Editcourse from "./Editcourse";
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import '../index.css'

function importAll(r) {
        let images = {};
        r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
        return images;
      }

const Listcourses = ({ courses, title }) => {
        
        const navigate = useNavigate();

        const addCourse = () => {
                navigate('/admin/addCourse');
        }

        const editCourse = (course) =>{
                navigate('/admin/editCourse',{state:{'currentCourse':course}})
        }
        if(location.state){
                if(location.state.edit){
                        window.location.reload()
                        window.history.replaceState({}, document.title)
                }
                
        }
        const deleteCourse = (id) => {
                console.log(id)
                axios.delete('http://localhost:8080/admin/deleteCourse/'+id)
          .then(res => {
                  console.log(res)
                  if(res.status!=200){
                          throw Error("unable to delete course!")
                  }
                  return res.data
          })
          .then((data)=>{
                  console.log(data);
                  toast.success('Course deletion successful', {
                        position: "top-right",
                        autoClose: 2000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                });
                window.location.reload()
          })
          .catch((e)=>{
                toast.info(e.message, {
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                  });
                  window.location.reload()
          })


          navigate('/admin/viewCourses')
        
        }

        const images = importAll(require.context('../images/courses', false, /\.(png|jpe?g|svg)$/));
        const names = Object.values(images)
        
        return ( 
                <div className="course-list">
                        <ToastContainer />
                        <div className="row">
                                <div className="col-sm-8">
                                        <h2>{ title }</h2>
                                </div>
                                <div className="col-sm-4">
                                        <MDBBtn class="button-style" onClick={ addCourse }>Add Course</MDBBtn>
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
                                                                        <MDBBtn class="button-style" onClick={()=>editCourse(course)}>Edit</MDBBtn>
                                                                </div>
                                                                <div className="col-sm-4">
                                                                        <MDBBtn class="button-style" onClick={()=>deleteCourse(course.courseId)}>Delete</MDBBtn>
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