import React from 'react';
import {
  MDBInput,
  MDBBtn,
} from 'mdb-react-ui-kit';
import { useState } from 'react';
import  useFetch from './useFetch';
import { useNavigate } from 'react-router-dom'; 
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import '../index.css'

export default function Login() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userRole, setUserRole] = useState('admin');
  let [error, setError] = useState('');

  const navigate = useNavigate();
  const handleSignIn = (e) => {
        e.preventDefault();
        var url = ""
        const body = { email, password };
        if(userRole=="admin") {
              url = "http://localhost:8080/admin/login";
        }else{
            url = "http://localhost:8080/user/login";
        }
        const obj = {
                email:email,
                password: password
        }
        axios.post(url,obj)
            .then((resp)=>{
                if(resp.data){
                    if(userRole==="user"){
                        navigate('/viewacademy');
                        
                    }else{

                        navigate('/adminacademy');
                    }
                    setTimeout(() => {
                      toast.success('login success', {
                              position: "top-right",
                              autoClose: 2000,
                              hideProgressBar: false,
                              closeOnClick: true,
                              pauseOnHover: true,
                              draggable: true,
                              progress: undefined,
                      });
                    }, 300);
                    localStorage.setItem('user', true)
                }
                else{
                  toast.info('Invalid credentials', {
                          position: "top-right",
                          autoClose: 5000,
                          hideProgressBar: false,
                          closeOnClick: true,
                          pauseOnHover: true,
                          draggable: true,
                          progress: undefined,
                    });
                    localStorage.setItem('user', false)
                }
            })
     
        
        
  }
  return (
    
    <div className="container">
      <ToastContainer />
            <div className="row">
                    <div className="col-sm-4"></div>
                    <div className="col-sm-4">
                            <form onSubmit={handleSignIn}>
                                <br /><br />
                                  <h2 className="text-center">Sign In</h2>
                                  <br />
                                  <select 
                                  required
                                name="" id=""
                                value={userRole} 
                                onChange={(e) => setUserRole(e.target.value)}
                                >
                                        <option value="admin">admin</option>
                                        <option value="user">user</option>
                                </select>
                                    <br /><br />
                                <span>{error}</span>
                              <MDBInput required className='mb-4' type='email' id='email' value={ email } label='Email address' onChange={(e) => setEmail(e.target.value)} />
                              <MDBInput required className='mb-4' type='password' id='password' value={ password } label='Password' onChange={(e) => setPassword(e.target.value)} />
                              <MDBBtn class="button-style" type='submit' className='mb-4' block>
                                Sign in
                              </MDBBtn>

                              <div className='text-center'>
                                  <p>
                                    Not a member? <a href='/signup'>Register</a>
                                  </p>
                              </div>
                            </form>
                    </div>
            </div>
            
    </div>
    
  );
}