import React from 'react';
import styled from 'styled-components';
import LogoImg from '../../../Resources/logomarca.png'
import LogoType from '../../../Resources/logotipo.png'



const HeaderContainer = styled.div `
    width: 100vw;
    height: 9vh;
    background-color: #F5F3FB;
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media (max-width: 1366px) {
        width: 100vw;
    }
    @media (max-width: 1600px) {
        width: auto;
    }
`

const ContainerLogo = styled.div `
    display: flex;
    align-items: center;
    justify-content: start;
    margin-left: 4em;
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

const ContainerMenu = styled.nav`
    display: flex;
    justify-content: right;
    align-items: center;
    width: 50%;
    margin-right: 4em;
`

const ButtonHowItWorks = styled.button`
    height: 5vh;
    width: 40%;
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
    height: 5vh;
    width: 40%;
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
    height: 5vh;
    width: 40%;
    font-weight: bold;
    color: #F5F3FB;
    background-color: #8E6CD2;
    border-radius: 200px;
    text-align: center;
    text-transform: uppercase;
    border: none;
`



class Header extends React.Component {
    constructor(props){
        super(props);

        this.state = {
        }
    }


    render() {
        return (
            <HeaderContainer>
                <ContainerLogo onClick={() => {this.props.changeCurrentPage('homePage')}}>
                    <ImgLogo src={LogoImg}></ImgLogo>
                    <TypeLogo src={LogoType}></TypeLogo>
                </ContainerLogo>
                <ContainerMenu>
                    <ButtonHowItWorks onClick={() => {this.props.changeCurrentPage('comoFunciona')}}> Como funciona? </ButtonHowItWorks>
                    <BotaoServicos onClick={() => {this.props.changeCurrentPage('jobsPage')}}> Encontrar Serviços </BotaoServicos>
                    <BotaoCadastro onClick={() => {this.props.changeCurrentPage('searchPage')}}> Criar Serviços</BotaoCadastro>
                </ContainerMenu>
            </HeaderContainer>
        )
    }
}



export default Header