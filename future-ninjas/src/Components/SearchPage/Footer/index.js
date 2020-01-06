import React from 'react';
import styled from 'styled-components';

const FooterBar = styled.div`
  width: 100%;
  height: 9vh;
  background-color: #F5F3FB;
  position: fixed;
  bottom: 0;
`
function Footer() {
    return (
      <FooterBar/>
    );
  }
  
  export default Footer;