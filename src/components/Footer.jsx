import React from "react";
import {
  MDBFooter,
  MDBContainer,
  MDBIcon,
  MDBBtn
} from 'mdb-react-ui-kit';

import './components.css';


const Footer = () => {
  return (
        <MDBFooter className='bg-dark text-center text-white'>
      <MDBContainer className='p-4 pb-0'>
        <section className='mb-4'>
          <MDBBtn outline color="light" floating className='m-1 footer-social-network-icon' href='#!' role='button'>
            <MDBIcon fab icon='facebook-f' />
          </MDBBtn>

          <MDBBtn outline color="light" floating className='m-1 footer-social-network-icon' href='#!' role='button'>
            <MDBIcon fab icon='instagram' />
          </MDBBtn>

          <MDBBtn outline color="light" floating className='m-1 footer-social-network-icon' href='#!' role='button'>
            <MDBIcon fab icon='tiktok' />
          </MDBBtn>


        </section>
      </MDBContainer>

      <div className='text-center p-3 footer-copyright' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        © 2022 Copyright:
        <a className='text-white footer-brand' href='https://glamourglamwoman.github.io/landing/'>
          Glamour Glam Woman
        </a>
      </div>
    </MDBFooter>
  );
};

export default Footer;


