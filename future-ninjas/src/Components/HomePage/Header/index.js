import React from 'react';
import axios from 'axios';
import styled from 'styled-components';
import LogoFutureNinja from '../../../Resources/FutureNinja-logo.png';


const HeaderContainer = styled.header`
    display: grid;
    grid-template: 1fr/1fr 1fr 1fr 1fr 1fr;
    width: 100%;
    height: 40px;
    background-color: #F5F3FB;
    justify-content: center;
    align-items: center;
`

const LogoHeader = styled.img`
    height: 40px;
    padding: 0 40px;
`

const ButtonHowItWorks = styled.button`
    grid-column: 3/4;
    height: 30px;
    width: 95%;
    border: none;
    background-color: #F5F3FB;
    border-radius: 200px;
    color: #8E6CD2;
    font-style: normal;
    font-weight: bold;
    text-align: center;
    text-transform: uppercase;

    &:hover {
    background-color: #C2C1C7;
    }
`

const BotaoServicos = styled.button`
    grid-column: 4/5;
    height: 30px;
    width: 95%;
    height: 40px;
    border: none;
    background-color: #F5F3FB;
    border-radius: 200px;
    color: #8E6CD2; 
    font-style: normal;
    font-weight: bold;
    text-align: center;
    text-transform: uppercase;

    &:hover {
    background-color: #C2C1C7;
    }
`

const BotaoCadastro = styled.button`
    grid-column: 5/5;
    height: 30px;
    width: 95%;
    font-weight: bold;
    color: #F5F3FB;
    background-color: #8E6CD2;
    border-radius: 200px;
    text-align: center;
    text-transform: uppercase;
`



class Header extends React.Component {

    render() {
        return (
            <HeaderContainer>
                <LogoHeader src={LogoFutureNinja} />
                <ButtonHowItWorks> Como funciona? </ButtonHowItWorks>
                <BotaoServicos> Encontrar Serviços </BotaoServicos>
                <BotaoCadastro> Seja um Profissional</BotaoCadastro>
            </HeaderContainer>
        )
    }
}

export default Header