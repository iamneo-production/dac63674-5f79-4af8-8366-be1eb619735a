import React, { useState } from 'react';
import {
  MDBNavbar,
  MDBContainer,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBNavbarToggler,
  MDBNavbarBrand,
  MDBCollapse
} from 'mdb-react-ui-kit';
import useFetch from './useFetch';
import Liststudents from './Liststudents';
import Navbar from './Navbar';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import '../index.css'

export default function Adminstudent() {
  const [showNavColor, setShowNavColor] = useState(false);


  const { data: students, isPending, error} = useFetch("http://localhost:8080/admin/viewStudents");
  return (
    <>
        <Navbar />
                <div className="container">
                        { error && <div> { error } </div>}
                        { isPending && <div> Loading...</div>}
                        { students && <Liststudents students={ students } title="All Students!"/> }
                </div>

      <br />

      
      
    </>
  );
}