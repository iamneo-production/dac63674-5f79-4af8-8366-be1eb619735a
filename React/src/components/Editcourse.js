import React from 'react';
import {
  MDBInput,
  MDBCheckbox,
  MDBBtn
} from 'mdb-react-ui-kit';
import { useState } from 'react';
import { useParams } from "react-router-dom";
import Navbar from './Navbar';
import {useLocation} from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import '../index.css'


export default function Editcourse() {

  const location = useLocation();
  const navigate = useNavigate();
 const course = location.state.currentCourse;

  const [courseName, setCourseName ] = useState(course.courseName);
  const [courseDescription, setCourseDescription ] = useState(course.courseDescription);
  const [courseDuration, setCourseDuration ] = useState(course.courseDuration);
  const [error, setError] = useState('');
  const [isPending, setIsPending] = useState('');

  const updateCourse = (e) => {
        e.preventDefault()
        const body = { courseName, courseDescription, courseDuration}

          axios.put('http://localhost:8080/admin/editCourse/'+course.courseId,body)
          .then(res => {
                  if(res.status!=200){
                          throw Error("unable to update course!")
                  }
                  return res.data
          })
          .then((data)=>{
                  console.log(data);
                  setIsPending(false)
                  setError(null)
                  setTimeout(() => {
                    toast.success('Course updated successfully!', {
                            position: "top-right",
                            autoClose: 2000,
                            hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                    });
                  }, 300);
          })
          .catch((e)=>{
                  setError(e.message);
                  setIsPending(false);
                  console.log(e.message);
                  toast.info(e.message, {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
              });
          })


          navigate('/admin/viewCourses',{state:{'edit':true}})
        
  }
  return (

    <div className="container">
                <Navbar />
                <ToastContainer />
            <div className="row">
                  <div className="col-sm-4"></div>
                  <div className="col-sm-4">
                  <br /><br />
                    <h2 className="text-center">Edit Course</h2>
                    <br />
                  <form onSubmit={updateCourse}>
                          <MDBInput 
                                id='name' 
                                wrapperClass='mb-4' 
                                label='Course Name' 
                                value={courseName} 
                                onChange={(e) =>setCourseName(e.target.value)}
                                required
                        />
                          
                          <MDBInput 
                                className='mb-4' 
                                id='description' 
                                label='Course Description'
                                value={courseDescription} 
                                onChange={(e) =>setCourseDescription(e.target.value)}
                                required
                             />
                          <MDBInput 
                                className='mb-4' 
                                id='duration' 
                                label='Course Duration' 
                                value={courseDuration}
                                type='number'
                                onChange={(e) =>setCourseDuration(e.target.value)}
                                required
                          />
                         
                          <MDBBtn class="white" type='submit' className='mb-4' block>
                            Update
                          </MDBBtn>
                    </form>
                  </div>
            </div>
    </div>
    
  );
}