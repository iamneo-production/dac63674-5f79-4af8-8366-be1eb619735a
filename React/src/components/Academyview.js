import React from 'react';
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardSubTitle,
  MDBCardText,
  MDBCardLink
} from 'mdb-react-ui-kit';
import { ToastContainer, toast } from 'react-toastify';
import '../index.css'

export default function Academyview({ name, description, edit, deletepath }) {


  return (
    <MDBCard>
      <MDBCardBody>
        <MDBCardTitle>{ name }</MDBCardTitle>

        <MDBCardText>
                { description  }
        </MDBCardText>
        <MDBCardLink href={ edit }>Edit</MDBCardLink>
        <MDBCardLink href={ deletepath }>Delete</MDBCardLink>
      </MDBCardBody>
    </MDBCard>
  );
}