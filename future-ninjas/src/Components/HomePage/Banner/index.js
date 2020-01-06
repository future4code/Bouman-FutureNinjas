import React from 'react';
import styled from 'styled-components';
import ButtonHome from './Button';

const BannerContainer = styled.div`
    background-color: #D4C7EB;
    width: 100%;
    display: flex;
    justify-content: space-around;
    padding: 50px 0;
    align-items: center;
`

const TextContainer = styled.div`
    letter-spacing: 0.25px;
    line-height: 25px;
    max-width: 357px;
`

const Title = styled.h1`
    margin: 0;
    padding: 0;
    font-size: 24px;
`

const Paragraph = styled.p`
    margin: 0;
    padding: 0;
    font-size: 13px;
    color: #606061;
`

const Image = styled.img`
    width: 450px;
`

const ButtonsContainer = styled.div`
	display: flex;
	justify-content: center;
	background-color: #E5E5E5;
`

export default class Banner extends React.Component{

    constructor(props){
        super(props)
    }

    render() {
        return(
            <div>
                <BannerContainer>
                    <TextContainer>
                        <Title>Entre os melhores para a realização de qualquer serviço.</Title>
                        <Paragraph>O talento certo, no momento certo.</Paragraph>
                    </TextContainer>
                    <Image src={require('../../../Resources/ninjas-banner.png')}/>
                </BannerContainer>

                <ButtonsContainer>
                    <ButtonHome function={this.props.changeCurrentPage} page='searchPage' text="Contrate um profissional" image={require("../../../Resources/contrato-icone.png")}/>
                    <ButtonHome function={this.props.changeCurrentPage} page='jobsPage' text="Seja um profissional" image={require("../../../Resources/ninja-icone.png")}/>
                </ButtonsContainer>
            </div>
        )
    }
    }
