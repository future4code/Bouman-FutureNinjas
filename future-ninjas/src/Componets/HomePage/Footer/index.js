import React from 'react';
import axios from 'axios';
import styled from 'styled-components';

const FooterContainer = styled.div`
    display: flex;
    width: 100%;
    height: 312px;
    position: absolute;
    bottom: 0%;
    background: #606061;
`

const InternalLinks = styled.div`
    position: absolute;
    left: 24.06%;    
`

const FooterTitles = styled.p`
    font-weight: bold;
    font-size: 18px;
    line-height: 25px;
    text-align: center;
    letter-spacing: 0.25px;
    color: #8E6CD2;
`

const FollowUs = styled.div`
    position: absolute;
    right: 31.09%;
`

const LinksToPages = styled.div`
    display: flex;
    flex-direction: column;
    list-style-type: none;
    color: #ffffff;
    justify-content: center;
    align-items: center;

`

const Logo = styled.img`
width: 40px;
height: 40px;
`


class Footer extends React.Component {

    render() {
        return (
            <FooterContainer>
                <InternalLinks>
                    <FooterTitles>
                        Future Ninjas
                </FooterTitles>
                    <LinksToPages>
                        <li>COMO FUNCIONA</li>
                        <li>ENCONTRAR PROFISSIONAIS</li>
                        <li>SEJA UM PROFISSIONAL</li>
                    </LinksToPages>

                </InternalLinks>
                <FollowUs>
                    <FooterTitles>
                        Redes Sociais
                    </FooterTitles>
                    <LinksToPages>
                        <div>
                            <Logo src={require('../../../Resources/facebook.png')} />
                            <span>FACEBOOK</span>
                        </div>
                        <div>
                            <Logo src={require('../../../Resources/instagram.png')} />
                            <span>INSTAGRAM</span>
                        </div>
                        <div>
                            <Logo src={require('../../../Resources/email.png')} />
                            <span>E-MAIL</span>
                        </div>
                        <div>
                            <Logo src={require('../../../Resources/twitter.png')} />
                            <span>TWITTER</span>
                        </div>
                    </LinksToPages>

                </FollowUs>


            </FooterContainer>
        )
    }
}

export default Footer