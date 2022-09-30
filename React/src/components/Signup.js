import React from 'react';
import {
  MDBInput,
  MDBCol,
  MDBRow,
  MDBCheckbox,
  MDBBtn,
  MDBIcon,
  
} from 'mdb-react-ui-kit';
import { ToastContainer, toast } from 'react-toastify';
import {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../index.css'

export default function Signup() {
        const navigate = useNavigate();
        var url = ""
        const [email, setEmail] = useState('');
        const [username, setUsername] = useState('');
        const [mobile, setMobile] = useState('')
  const [password, setPassword] = useState('');
        const [userRole, setUserRole] = useState('user')
        const handleSignup = (e)=>{
                e.preventDefault()
                const regexExp  = /^[789]\d{9}$/

                if(regexExp.test(mobile)){
                        const body = {
                                "email": email,
                                "password": password,
                                "mobileNumber": mobile,
                                "userRole": userRole,
                                "userName": username,
                        }
                        axios.post('http://localhost:8080/user/signup', body)
                        .then(res => {
                                console.log(res)
                                if(res.status!=200){
                                        throw Error("Unable to signup")
                                }
                                return res.data
                        })
                        .then((data)=>{
                                console.log(data);
                                setTimeout(() => {
                                        toast.success('Registration success', {
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
                                toast.info(e.message, {
                                        position: "top-right",
                                        autoClose: 5000,
                                        hideProgressBar: false,
                                        closeOnClick: true,
                                        pauseOnHover: true,
                                        draggable: true,
                                        progress: undefined,
                                });
                                console.log(e.message);
                        })
                        navigate('/')
                }else{
                        console.log(e.message);
                        toast.info('Enter a valid mobile number', {
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
                <ToastContainer />
                <div className="row">
                        <div className="col-sm-4"></div>
                        <div className="col-sm-4 ">
                                <form onSubmit={handleSignup}>
                                        <br /><br />
                                        <h2 className="text-center">Sign Up</h2>
                                        <br />
                                        
                                        <MDBRow className='mb-4'>
                                                <MDBCol>
                                                <MDBInput required id='form3Example1' label='Username' value={ username } onChange={(e) => setUsername(e.target.value)} />
                                                </MDBCol>
                                                <MDBCol>
                                                <MDBInput required id='form3Example2' label='Mobile Number' value={ mobile } onChange={(e) => setMobile(e.target.value)} />
                                                </MDBCol>
                                        </MDBRow>
                                        <MDBInput required className='mb-4' type='email' id='form3Example3' label='Email address'value={ email }  onChange={(e) => setEmail(e.target.value)}  />
                                        <MDBInput required className='mb-4' type='password' id='form3Example4' label='Password' value={ password }onChange={(e) => setPassword(e.target.value)}/>


                                        
                                        <MDBBtn class="button-style" type='submit' className='mb-4' block>
                                                Sign Up
                                        </MDBBtn>

                                        <div className='text-center'>
                                                <p>
                                                Already a member? <a href='/'>Login</a>
                                                </p>
                                        </div>
                                </form>
                        </div>
                </div>
                
        </div>
    
  );
}