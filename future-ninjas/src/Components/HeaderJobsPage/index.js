import React from 'react';
import styled from 'styled-components';
import LogoImg from '../../Resources/logomarca.png'
import LogoType from '../../Resources/logotipo.png'



const Header = styled.div `
    width: 100%;
    height: 9vh;
    background-color: #F5F3FB;
    display: flex;
    justify-content: initial;
    align-items: center;
`

const ImgLogo = styled.img `
    width: 3em ;
    height: 7vh;
    @media (min-width: 1600px) {
        width: 4em ;
        height: 7vh;
    }
    @media (min-width: 2560px) {
        width: 6em ;
        height: 7vh;
    }
`

const TypeLogo = styled.img `
    width: 6em ;
    height: 7vh;
    @media (min-width: 1600px) {
        width: 7em ;
        height: 7vh;
    }
    @media (min-width: 1920px) {
        width: 8em ;
        height: 7vh;
    }
    @media (min-width: 2560px) {
        width: 12em ;
        height: 7vh;
    }
`

const ContainerLogo = styled.div `
    display: flex;
    align-items: center;
    justify-content: start;
    margin-left: 3em;
`



function HeaderJobsPage() {
  return (
    <Header>
        <ContainerLogo>
            <ImgLogo src={LogoImg}></ImgLogo>
            <TypeLogo src={LogoType}></TypeLogo>
        </ContainerLogo>
    </Header>
  );
}



export default HeaderJobsPage;