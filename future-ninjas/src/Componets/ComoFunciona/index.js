import React, { Component } from 'react';
import axios from 'axios';
import LogoFutureNinja from '../../Resources/logo.png'
import LogoFacebook from '../../Resources/facebook.png'
import LogoTwitter from '../../Resources/twitter.png'
import LogoEmail from '../../Resources/logoEmail.png'
import LogoInstagram from '../../Resources/instagram.png'
import styled from 'styled-components';

const PageContainer= styled.div`
display: flex;
font-family: 'Roboto';
text-align: center;
`
const LogoBanner = styled.img`
width: 400px;
height: 350px;
margin: 2vw 4vw;
`
const Banner= styled.section`
display: flex;
height: 24rem;
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
top: 1.8vw;
height: 35px;
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
bottom: 21.8vw;
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
left: 40%;
bottom: 3vw;
margin: 1vw 1vw 1vw 1vw;
`
const Instagram = styled.img`
width:60px;
height: 60px;
`
const Facebook = styled.img`
width:60px;
height: 60px;
`
const Email = styled.img`
width: 59px;
height: 59px;
`
const Twitter = styled.img`
width:60px;
height: 60px;
`
const BlocoTexto = styled.section`
position: absolute;
left: 9vw;
width: 80vw;
height: 11vw;
bottom: 8vw;
padding: 3px;
margin-bottom: 20px;
margin-top: 10px;
background-image: linear-gradient(white, #F5F5F5);
`
const Texto = styled.p`
color: #404040;
font-weight: 550;
font-size: 17px;
font-style: regular;
text-align: justify;
padding: 5px;
margin-left: 6px;
margin-right: 6px;
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
            <Instagram alt="Instagram" src={LogoInstagram}/>
            <Facebook alt="Facebook"  src={LogoFacebook}/>
            <Email alt="E-mail"  src={LogoEmail}/>
            <Twitter alt="Twitter"  src={LogoTwitter}/>
            </Logos>
            <BlocoTexto> 
               <Texto>Sabemos o quanto é difícil achar um profissional de confiança para desenvolver serviços que não temos muito domínio. Assim nasce a FutureNinjas com a proposta de facilitar o encontro da tarefa e a resolução: você e um profissional ninja. Você não precisa se preocupar com nada: basta inscrever o seu serviço e um dos nossos ninjas entrará em contato em até 24hrs. O agendamento e pagamento será feito tudo dentro da nossa plataforma garantindo mais segurança para ambas as partes. E sempre ao final do serviço não se esqueça de avaliar seu ninja.</Texto>
            </BlocoTexto>
            <Footer/>

         </PageContainer>
      )};
}