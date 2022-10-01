import React from 'react';
import {
  MDBInput,
  MDBCheckbox,
  MDBBtn
} from 'mdb-react-ui-kit';
import { useState } from 'react';
import Navbar from './Navbar'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import '../index.css'

export default function Addinstitute() {

  const [name, setName] = useState("")
  const [email, setEmail ] = useState('');
  const [phone, setPhone ] = useState('');
  const [address, setAddress ] = useState('');
  const [description, setDescription ] = useState('');

  const [error, setError] = useState('');
  const [isPending, setIsPending] = useState('');
  const navigate = useNavigate();

  const addAcademy = (e) => {
        e.preventDefault()
        const regexExp = /^[6-9]\d{9}$/gi;


        if(regexExp.test(phone)){
                const body = {
                        "instituteName": name,
                        "instituteDescription": description,
                        "instituteAddress": address,
                        "mobile": phone,
                        "email": email
                }
        
                        axios.post('http://localhost:8080/admin/addInstitute', body)
                        .then(res => {
                                if(res.status!=200){
                                        throw Error("Unable to add institute!")
                                }
                                return res.data
                        })
                        .then((data)=>{
                                console.log(data);
                                setIsPending(false)
                                setError(null)
                                setTimeout(() => {
                                toast.success('Institute addition successful', {
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
        
        
                navigate('/admin/viewInstitutes',{state:{'edit':true}})
        }else{
                toast.info("Enter a valid phone number", {
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
            <div className="row">
                  <div className="col-sm-4"></div>
                  <div className="col-sm-4">
                  <br /><br />
                    <h2 className="text-center ">Add Academy</h2>
                    <br />
                  <form onSubmit={addAcademy}>
                          <MDBInput 
                                id='name' 
                                wrapperClass='mb-4' 
                                label='Academy Name'
                                value={name} 
                                onChange={(e) =>setName(e.target.value)}
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
                                id='phone' 
                                label='Phone'
                                value={phone} 
                                onChange={(e) =>setPhone(e.target.value)}
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
                              wrapperClass='mb-4'  
                              rows={4} 
                              label='Description' 
                              id='description'
                              value={description}
                              onChange={(e) =>setDescription(e.target.value)}
                              required
                          />
                          <MDBBtn class="success" type='submit' className='mb-4' block>
                            Add Academy
                          </MDBBtn>
                    </form>
                  </div>
            </div>
    </div>
    
  );
}