import { useEffect } from "react";
import { Link } from "react-router-dom";
import {
        MDBCard,
        MDBCardBody,
        MDBCardTitle,
        MDBCardText,
        MDBBtn,
        MDBCardImage,
        MDBRipple,
        MDBCardLink
      } from 'mdb-react-ui-kit';
      

import { useNavigate } from 'react-router-dom'
import axios from 'axios';
import useFetch from './useFetch';
import { ToastContainer, toast } from 'react-toastify';
import '../index.css'


function importAll(r) {
        let images = {};
        r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
        return images;
      }

const Listacademies = ({ institutes, title }) => {
        
        const navigate = useNavigate();
        const basepath = "../images/academies/1.jpg"
        const getCourses = () => {
                axios.get("http://localhost:8080/admin/viewCourses").then((res)=>{
                        if(res.status!=200){
                                throw Error("unable to list courses")
                        }
                        const data = res.data;
                        localStorage.setItem('institutes',JSON.stringify(institutes));
                        localStorage.setItem('coursenames',JSON.stringify(data))
                        toast.success('Courses listing successful!', {
                                position: "top-right",
                                autoClose: 2000,
                                hideProgressBar: false,
                                closeOnClick: true,
                                pauseOnHover: true,
                                draggable: true,
                                progress: undefined,
                        });
                        setTimeout(() => {
                                navigate("/user/viewCourses",{state:{'courses':data, 'institutes':institutes}})
                        }, 2000);
                       
                }).catch((e)=>{
                        console.log(e.message);
                        toast.error('Unable to list the courses', {
                                position: "top-right",
                                autoClose: 2000,
                                hideProgressBar: false,
                                closeOnClick: true,
                                pauseOnHover: true,
                                draggable: true,
                                progress: undefined,
                        });
                        setTimeout(() => {
                                navigate('/admin/viewCourses')
                        },2000)
                        
                 })
        }

        const images = importAll(require.context('../images/academies', false, /\.(png|jpe?g|svg)$/));
        console.log(images)
        const names = Object.values(images)
     
        
        return ( 
                <div className="institute-list">
                       <ToastContainer />
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
                                                                        <MDBBtn class="button-style" onClick={()=>getCourses()}>See courses</MDBBtn>

                                                                </MDBCardBody>
                                                        </MDBCard>

                                                
                                        </div>
                                ))}
                         </div>
                </div>
         );
}
 
export default Listacademies;