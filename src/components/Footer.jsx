import React from 'react';
import { MDBFooter } from 'mdb-react-ui-kit';

export default function SimpleFooter() {
  return (
    <MDBFooter bgColor='dark' className='text-center text-lg-start text-white' style={{ width: '100%' }}>
      <div className='text-center p-4' style={{ backgroundColor: 'black', color: 'white', paddingTop: 50, paddingBottom: 50,
        display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingLeft: '70px', paddingRight: '70px' }}>
        <p>
          <strong>Contact Us</strong>
        </p>
        <p>
          <span>Email: </span>info@example.com
        </p>
        <p>
          <span>Address: </span>New York, NY 10012, US
        </p>
        <p>
          <span>Phone: </span>+ 01 234 567 88
        </p>
      </div>
    </MDBFooter>
  );
}