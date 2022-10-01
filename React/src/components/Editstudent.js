import React from 'react';
import {
  MDBInput,
  MDBCheckbox,
  MDBBtn
} from 'mdb-react-ui-kit';
import { useState } from 'react';
import Navbar from './Navbar';
import {useLocation} from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import '../index.css'

export default function Editstudent() {


      const location = useLocation();
      const navigate = useNavigate();
     const student = location.state.currentStudent;
    

  const [email, setEmail ] = useState(student.email);
  const [mobile, setMobile ] = useState(student.mobile);
  const [address, setAddress ] = useState(student.address);
  const [studentName, setStudentName ] = useState(student.studentName);
  const [studentDOB, setStudentDOB ] = useState(student.studentDOB);
  const [age, setAge ] = useState(student.age);

  const [error, setError] = useState('')
  const [isPending, setIsPending] = useState('')

  const updateStudent= (e) => {
        e.preventDefault();
        const regexExp  = /^[789]\d{9}$/

        if(regexExp.test(mobile)){
            const body = {email, mobile, address, studentName, studentDOB, age}

            axios.put('http://localhost:8080/admin/editStudent/'+student.studentId, body)
            .then(res => {
                    console.log(res)
                    if(res.status!=200){
                            throw Error("unable to update student!")
                    }
                    return res.data
            })
            .then((data)=>{
                    console.log(data);
                    setIsPending(false)
                    setError(null)
                    setTimeout(() => {
                          toast.success('Student updated successfully!', {
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
  
  
            navigate('/admin/viewStudents',{state:{'edit':true}})
        }else{
            toast.info('Enter a valid phone number', {
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
        <Navbar />
        <ToastContainer />
        { error && <div> { error } </div>}
                { isPending && <div> Loading...</div>}
            <div className="row">
                  <div className="col-sm-4"></div>
                  <div className="col-sm-4">
                  <br /><br />
                    <h2 className="text-center">Edit Student</h2>
                    <br />
                  <form onSubmit={updateStudent}>
                          <MDBInput 
                                className='mb-4' 
                                id='name' 
                                label='Student Name' 
                                value={studentName}
                                onChange={(e) =>setStudentName(e.target.value)}
                                required
                          />
                          <MDBInput 
                                className='mb-4' 
                                id='dob' 
                                label='Date of Birth' 
                                value={studentDOB}
                                onChange={(e) =>setStudentDOB(e.target.value)}
                                required
                          />
                          <MDBInput className='mb-4' 
                                type='email' 
                                id='email' 
                                wrapperClass='mb-4' 
                                value={email} 
                                onChange={(e) =>setEmail(e.target.value)}
                                label='Email address'
                                required 
                        />
                          <MDBInput 
                                className='mb-4' 
                                id='mobile' 
                                label='Mobile'
                                value={mobile} 
                                onChange={(e) =>setMobile(e.target.value)}
                                required
                             />
                          <MDBInput 
                                className='mb-4' 
                                id='address' 
                                label='Address' 
                                value={address}
                                onChange={(e) =>setAddress(e.target.value)}
                                required
                          />
                          <MDBInput 
                                    label='Age' 
                                    className='mb-4' 
                                    id='age' 
                                    type='number' 
                                    value={age}
                                    onChange={(e) =>setAge(e.target.value)}
                                    required
                        />
                          <MDBBtn class="button-style" type='submit' className='mb-4' block>
                            Update
                          </MDBBtn>
                    </form>
                  </div>
            </div>
    </div>
    
  );
}