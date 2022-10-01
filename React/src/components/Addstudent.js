import React from 'react';
import {
  MDBInput,
  MDBCheckbox,
  MDBBtn,
      
} from 'mdb-react-ui-kit';
import { useState } from 'react';
import Navbar from './Navbar'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import '../index.css'

export default function Addstudent() {

  const [email, setEmail ] = useState('');
  const [mobile, setMobile ] = useState('');
  const [address, setAddress ] = useState('');
  const [name, setName ] = useState('');
  const [dob, setDob ] = useState('');
  const [age, setAge ] = useState('');
  const [error, setError] = useState('');
  const [isPending, setIsPending] = useState('');
  const navigate = useNavigate();

  const addStudent= (e) => {
        e.preventDefault();
        const body = {
            "studentName": name,
            "studentDOB": dob,
            "address": address,
            "email": email,
            "mobile": mobile,
            "age": age
   }
   const regexExp  = /^[789]\d{9}$/

            if(regexExp.test(mobile)){
                  axios.post('http://localhost:8080/admin/addStudent', body)
                  .then(res => {
                              if(res.status!=200){
                                    throw Error("unable to add student!")
                              }
                              return res.data
                  })
                  .then((data)=>{
                              console.log(data);
                              setIsPending(false)
                              setError(null)
                              setTimeout(() => {
                              toast.success('Student addition successful', {
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
            } else{
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
                  
                    <h2 className="text-center">Add Student</h2>
                    <br />
                  <form onSubmit={addStudent}>
                          <MDBInput 
                                className='mb-4' 
                                id='name' 
                                label='Student Name' 
                                value={name}
                                onChange={(e) =>setName(e.target.value)}
                                required
                          />
                          <MDBInput 
                                className='mb-4' 
                                id='dob' 
                                label='Date of Birth' 
                                value={dob}
                                type='date'
                                onChange={(e) =>setDob(e.target.value) }
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
                                    onChange={(e) =>setAge(e.target.value)}
                                    required
                        />
                        
                          <MDBBtn class="button-style" type='submit' className='mb-4' block>
                            Add Student
                          </MDBBtn>
                    </form>
                  </div>
            </div>
    </div>
    
  );
}