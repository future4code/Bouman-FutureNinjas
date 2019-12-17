import React from 'react';
import styled from 'styled-components';
import JobImg from '../../Resources/job-offer.jpg'


const ContainerCard = styled.div `
    background: #FAFAFA;
    width: 70%;
    height: 40vh;
    box-shadow: 0 0.2em 0.3em rgba(0, 0, 0, 0.3);
`

const ImgJob = styled.img `
    width: 100%;
    height: 60%;
`

const Title = styled.h3 `
    margin: 0;
    margin-left: 0.7em;
    height: 7%;
`

const Subtitle = styled.p `
    margin: 0;
    margin-left: 0.9em;
    height: 10%;
`

const AceptButton = styled.button `
    background-color: #8E6CD2;
    border-radius: 20px;
    border: none;
    color: #FFFFFF;
    width: 50%;
    height: 15%;
    display: block;
    margin: 0 auto;
    margin-top: 4%;
`



function JobCard() {
  return (
    <ContainerCard>
        <ImgJob src={JobImg}></ImgJob>
        <Title>Título da Oferta</Title>
        <Subtitle>Categoria</Subtitle> 
        <AceptButton>CANDIDATAR-SE</AceptButton>
    </ContainerCard>
  );
}



export default JobCard;