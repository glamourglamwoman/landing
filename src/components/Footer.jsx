import React from "react";
import {
  MDBFooter,
  MDBContainer,
  MDBIcon,
  MDBBtn
} from 'mdb-react-ui-kit';

import './components.css';

//facebook-f
//instagram
//tiktok

const Footer = () => {
  return (
        <MDBFooter className='bg-dark text-center text-white'>
      <MDBContainer className='p-4 pb-0'>
        <section className='mb-4'>
          <MDBBtn outline color="light" target="blank" floating className='m-1 footer-social-network-icon' href='https://www.instagram.com/glamour.glam.woman' role='button'>
              <MDBIcon fab icon='instagram' />
          </MDBBtn>  
    
        </section>
      </MDBContainer>

      <div className='text-center p-3 footer-copyright' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        © 2022 Copyright:
        <a className='text-white footer-brand' href='https://glamourglamwoman.netlify.app/'>
          Glamour Glam Woman
        </a>
      </div>
    </MDBFooter>
  );
};

export default Footer;


