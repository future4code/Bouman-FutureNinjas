import React from 'react';
import styled from 'styled-components';

const HeaderBar = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: space-between;
  background-color: #F5F3FB;
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 16px;
`

const HeaderLogo = styled.div`
  width: 20vw;
  & > img {
    display: block;
    margin: auto;
  }
`

const HeaderMenu = styled.div`
  width: 75%;
  margin-right: 3vw;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`

const Link = styled.div`
  color: #6202EE;
  padding: 0 1.5vw;
`

const HighlightedLink = styled.div`
  color: #F5F3FB;
  padding: 12px 1.5vw;
  font-weight: normal;
  background: #8E6CD2;
  border-radius: 200px;
`

function Header() {
  return (
    <HeaderBar>
      <HeaderLogo>
        <img src={require('../../../Resources/FutureNinja-logo.png')}/>
      </HeaderLogo>
      <HeaderMenu>
        <Link>COMO FUNCIONA?</Link>
        <Link>ENCONTRAR PROFISSIONAIS</Link>
        <HighlightedLink>SEJA UM PROFISSIONAL</HighlightedLink>
      </HeaderMenu>
    </HeaderBar>
  );
}

export default Header;