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
      

import { useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios';
import '../index.css'

function importAll(r) {
        let images = {};
        r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
        return images;
      }

const Listacademies = ({ institutes, title }) => {
        
        const navigate = useNavigate();

        const addAcademy = () => {
                navigate('/admin/addInstitute');
        }

        const editInstitute = (institute) => {
                navigate('/admin/editInstitute',{state:{'currentInstitute':institute}})
        }
        if(location.state){
                if(location.state.edit){
                        window.location.reload()
                        window.history.replaceState({}, document.title)
                }
                
        }
        
        const deleteInstitute = (id) => {
                axios.delete('http://localhost:8080/admin/deleteInstitute/'+id).then((resp) => {
                        console.log(resp.status)
                        if(resp.status === 200) {
                                toast.success('Academy deletion successful', {
                                        position: "top-right",
                                        autoClose: 2000,
                                        hideProgressBar: false,
                                        closeOnClick: true,
                                        pauseOnHover: true,
                                        draggable: true,
                                        progress: undefined,
                                });
                        }else{
                                throw Error("unable to delete academy!")
                        }
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
                        console.log(e.message);
                    })
                


          navigate('/admin/viewInstitutes')
        
        }

        const images = importAll(require.context('../images/academies', false, /\.(png|jpe?g|svg)$/));
        const names = Object.values(images)
        return ( 
                <div className="institute-list">
                        <ToastContainer />
                        <div className="row">
                                <div className="col-sm-8">
                                        <h2>{ title }</h2>
                                </div>
                                <div className="col-sm-4">
                                        <MDBBtn class="button-style" onClick={ addAcademy }>Add Academy</MDBBtn>
                                </div>
                        </div>
                        <div className="row">
                                {  institutes.map((institute)=>(
                                        <div className="institute-preview col-sm-4" key={ institute.instituteId }>

                                                <MDBCard class="card-style">
                                                <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
                                                        <MDBCardImage 
                                                                src={names[Math.floor(Math.random() * names.length)]} fluid />
                                                        <a>
                                                        <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
                                                        </a>
                                                </MDBRipple>
                                                        <MDBCardBody>
                                                                <MDBCardTitle>{  institute.instituteName }</MDBCardTitle>
                                                                <MDBCardText>
                                                                        { institute.instituteDescription }
                                                                </MDBCardText>
                                                                <MDBCardText>
                                                                        Email : { institute.email }
                                                                </MDBCardText>
                                                                <MDBCardText>
                                                                        Mobile : { institute.mobile }
                                                                </MDBCardText>
                                                                <MDBCardText>
                                                                        Address: { institute.instituteAddress }
                                                                </MDBCardText>
                                                                <div className="row">
                                                                <MDBBtn class="button-style" onClick={()=>editInstitute(institute)}>Edit</MDBBtn><pre>  </pre>
                                                                <MDBBtn class="button-style" onClick={()=>deleteInstitute(institute.instituteId)}>Delete</MDBBtn>
                                                                </div>
                                                        </MDBCardBody>
                                                </MDBCard>
                                        </div>
                                ))}
                         </div>
                </div>
         );
}
 
export default Listacademies;