import React, { useRef } from 'react';
import {
  MDBInput,
  MDBCheckbox,
  MDBBtn,
} from 'mdb-react-ui-kit';
import { useState } from 'react';
import Navbar from './Navbar';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import '../index.css'

export default function Addcourse() {
        const triggerItem7 = useRef(null);

  const [courseName, setCourseName ] = useState('');
  const [courseDescription, setCourseDescription ] = useState('');
  const [courseDuration, setCourseDuration ] = useState('');
  const [error, setError] = useState('');
  const [isPending, setIsPending] = useState('');
  const navigate = useNavigate();

  const addCourse = (e) => {
        e.preventDefault()
        console.log(courseName,courseDescription,courseDuration)
       const body = {
                "courseName": courseName,
                "courseDescription": courseDescription,
                "courseDuration": courseDuration,
       }

                axios.post('http://localhost:8080/admin/addCourse', body)
                .then(res => {
                        if(res.status!=200){
                                throw Error("Unable to add course!")
                        }
                        return res.data
                })
                .then((data)=>{
                        console.log(data);
                        setIsPending(false)
                        setError(null)
                        setTimeout(() => {
                        toast.success('Course addition successful', {
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
                { error && <div> { error } </div>}
                { isPending && <div> Loading...</div>}
            <div className="row">
            <ToastContainer />
                  <div className="col-sm-4"></div>
                 
                  <div className="col-sm-4">
                  <br /><br />
                    <h2 className="text-center ">Add Course</h2>
                    <br />
                  <form onSubmit={addCourse}>
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
                         
                          <MDBBtn class='white' type='submit' className='mb-4' block>
                            Add Course
                          </MDBBtn>
                    </form>
                  </div>
            </div>
    </div>
    
  );
}