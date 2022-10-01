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
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import '../index.css'
import { useLocation } from 'react-router-dom'

function importAll(r) {
        let images = {};
        r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
        return images;
      }

const Liststudents = ({ students, title }) => {
        const navigate = useNavigate();
        const location = useLocation();

        const addStudent = () => {
                navigate('/admin/addStudent');
        }

        const editStudent = (student) => {
                navigate('/admin/editStudent',{state:{'currentStudent':student}})
        }
        if(location.state){
                if(location.state.edit){
                        window.location.reload()
                        window.history.replaceState({}, document.title)
                }
                
        }
        const deleteStudent = (id) => {
                console.log(id)
                axios.delete('http://localhost:8080/admin/deleteStudent/'+id)
          .then(res => {
                  console.log(res)
                  if(res.status!=200){
                          throw Error("unable to delete student!")
                  }
                  return res.data
          })
          .then((data)=>{
                toast.success('Student deletion successful', {
                        position: "top-right",
                        autoClose: 2000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                });
                  console.log(data);
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
                 console.log(e.message);
                 window.location.reload()
          })


          navigate('/admin/viewStudents')
        
        }
        
        const images = importAll(require.context('../images/students', false, /\.(png|jpe?g|svg)$/));
        const names = Object.values(images)
        
        return ( 
                <div className="student-list">
                        <ToastContainer />
                        <div className="row">
                                <div className="col-sm-8">
                                        <h2>{ title }</h2>
                                </div>
                                <div className="col-sm-4">
                                        <MDBBtn class="button-style" onClick={ addStudent }>Add Student</MDBBtn>
                                </div>
                        </div>
                        <div className="row">
                                {  students.map((student)=>(
                                        
                                        
                                        <div className="student-preview col-sm-4" key={ student.studentId }>
                                                <MDBCard class="card-style">
                                                <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
                                                        <MDBCardImage 
                                                                src={names[Math.floor(Math.random() * names.length)]} fluid />
                                                        <a>
                                                        <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
                                                        </a>
                                                </MDBRipple>
                                                        <MDBCardBody>
                                                                <MDBCardTitle>{  student.studentName }</MDBCardTitle>
                                                                <MDBCardText>
                                                                       Date of Birth: { student.studentDOB }
                                                                </MDBCardText>
                                                                <MDBCardText>
                                                                        Mobile : { student.mobile }
                                                                </MDBCardText>
                                                                <MDBCardText>
                                                                        Email : { student.email }
                                                                </MDBCardText>
                                                                <MDBCardText>
                                                                        Address : { student.address }
                                                                </MDBCardText>
                                                                <div className="row">
                                                                <MDBBtn class="button-style" onClick={()=>editStudent(student)}>Edit</MDBBtn><pre>  </pre>
                                                                <MDBBtn class="button-style" onClick={()=>deleteStudent(student.studentId)}>Delete</MDBBtn>
                                                                </div>
                                                        </MDBCardBody>
                                                </MDBCard>
                                        </div>
                                ))}
                        </div>
                         
                </div>
         );
}
 
export default Liststudents;