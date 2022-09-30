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

export default function Editinstitute() {

  const location = useLocation();
  const navigate = useNavigate();
  const institute = location.state.currentInstitute;

  const [instituteName, setInstituteName] = useState(institute.instituteName)
  const [email, setEmail ] = useState(institute.email);
  const [mobile, setMobile ] = useState(institute.mobile);
  const [instituteAddress, setInstituteAddress ] = useState(institute.instituteAddress);
  const [instituteDescription, setInstituteDescription ] = useState(institute.instituteDescription);
  const [error, setError] = useState('');
  const [isPending, setIsPending] = useState('');
  const updateAcademy = (e) => {
        e.preventDefault()
        const regexExp  = /^[789]\d{9}$/

        if(regexExp.test(mobile)){
              const body ={ instituteName, email, mobile, instituteAddress, instituteDescription}

              axios.put('http://localhost:8080/admin/editInstitute/'+institute.instituteId, body)
              .then(res => {
                      if(res.status!=200){
                              throw Error("Unable to updated institute!")
                      }
                      return res.data
              })
              .then((data)=>{
                      console.log(data);
                      setIsPending(false)
                      setError(null)
                      setTimeout(() => {
                        toast.success('Institute updation successful', {
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
            <div className="row">
                  <div className="col-sm-4"></div>
                  <div className="col-sm-4">
                  <br /><br />
                    <h2 className="text-center">Edit Academy</h2>
                    <br />
                  <form onSubmit={updateAcademy}>
                          <MDBInput 
                              id='name' 
                              wrapperClass='mb-4' 
                              label='Academy Name' 
                              value={instituteName} 
                              onChange={(e) =>setInstituteName(e.target.value)}
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
                                value={mobile} 
                                onChange={(e) =>setMobile(e.target.value)}
                                required
                             />
                          <MDBInput 
                                className='mb-4' 
                                id='address' 
                                label='Address' 
                                value={instituteAddress}
                                onChange={(e) =>setInstituteAddress(e.target.value)}
                                required
                          />
                          <MDBInput 
                              wrapperClass='mb-4'  
                              rows={4} 
                              label='Description' 
                              id='description'
                              value={instituteDescription}
                              onChange={(e) =>setInstituteDescription(e.target.value)}
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