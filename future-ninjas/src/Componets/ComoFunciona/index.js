import React, { Component } from 'react';
import axios from 'axios';
import LogoFutureNinja from '../../Resources/logo.png'
import LogoFacebook from '../../Resources/facebook.png'
import LogoTwitter from '../../Resources/twitter.png'
import LogoEmail from '../../Resources/email.png'
import LogoInstagram from '../../Resources/instagram.png'
import styled from 'styled-components';

const PageContainer= styled.div`
display: flex;
`
const LogoBanner = styled.img`
width: 400px;
height: 350px;
margin: 2vw 4vw;
`
const Banner= styled.section`
display: flex;
height: 25rem;
width: 100%;
background-color: #F5F3FB;
`
const BotaoServicos = styled.button`
border: none;
background-color: #F5F3FB;
color: #8E6CD2; 
position: absolute;
height: 16px;
right: 28vw;
top: 2.4vw;
font-style: normal;
font-weight: 600;
font-size: 17px;
line-height: 16px;
text-align: center;
letter-spacing: 0.50px;
text-transform: uppercase;
`

const BotaoCadastro = styled.button`
position: absolute;
right: 7vw;
width: 17.5vw;
top: 2vw;
height: 29px;
font-style: normal;
font-weight: 500;
font-size: 15px;
color: #F5F3FB;
background-color: #8E6CD2;
border-radius: 200px;
line-height: 17px;
text-align: center;
letter-spacing: 0.50px;
text-transform: uppercase;
`

const TextoCard = styled.button`
border: none;
background-color: #DFD8E9;
color: #8E6CD2; 
position: absolute;
height: 38px;
width: 15vw;
left: 9vw;
bottom: 20vw;
font-style: normal;
font-weight: 600;
font-size: 17px;
line-height: 16px;
text-align: center;
letter-spacing: 0.45px;
border-radius: 3px;
text-transform: uppercase;
`
const Footer = styled.footer`
height: 40px;
background-color: #F5F3FB;
display: flex;
width: 100%;
position: fixed;
bottom: 0;
` 
const Logos = styled.section`
display: flex;
position: absolute;
left: 50%;
bottom: 5vw;
`
const Instagram = styled.img`
width:75px;
height: 75px;
`
export default class ComoFunciona extends Component {  
   render() {
      return (
         <PageContainer>
            <Banner>
            <LogoBanner src={LogoFutureNinja}/>
            <BotaoServicos> Encontrar Serviços </BotaoServicos>
            <BotaoCadastro> Seja um Profissional</BotaoCadastro>
            </Banner>

            <TextoCard> Como Funciona? </TextoCard>

            <Logos>
            <Instagram src={LogoInstagram}/>
            </Logos>

            <Footer/>

         </PageContainer>
      )};
}