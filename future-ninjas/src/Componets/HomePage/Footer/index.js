import React from 'react';
import axios from 'axios';
import styled from 'styled-components';

const FooterContainer = styled.div`
    display: grid;
    grid-template: 1fr/1fr 1fr 1fr 1fr 1fr;
    /* display: flex; */
    width: 100%;
    height: 312px;
    position: absolute;
    bottom: 0%;
    background: #606061;    
`

const InternalLinks = styled.div`
    grid-column: 2/5;
    grid-row: 1/1;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`

const FooterTitles = styled.p`
    font-weight: bold;
    font-size: 18px;
    line-height: 25px;
    letter-spacing: 0.25px;
    color: #8E6CD2;
`

const FollowUs = styled.div`
    grid-column: 4/5;
    grid-row: 1/1;
    width: 100%;
    display: flex;
    flex-direction: column;
`

const LinksContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    color: #ffffff;
    align-items: flex-start;
`

const Logo = styled.img`
    width: 40px;
    height: 40px;
    padding: 0 5px;
`

const LinkAndName = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`

const Link = styled.a`
    text-decoration: none;
    text-decoration-line: none;
    text-decoration-style: initial;
    text-decoration-color: initial;
    /* color: #ffffff; */
    
    &:active {
        color: red;
    }

    &:focus {
        color: red;
    }

    &:link{
        color: #ffffff;
    }

    &:visited {
        color: #ffffff;
    }
`

class Footer extends React.Component {

    render() {
        return (
            <FooterContainer>
                <InternalLinks>
                    <FooterTitles>
                        Future Ninjas
                    </FooterTitles>
                    <LinksContainer>
                        <p>COMO FUNCIONA</p>
                        <p>ENCONTRAR PROFISSIONAIS</p>
                        <p>SEJA UM PROFISSIONAL</p>
                    </LinksContainer>
                </InternalLinks>

                <FollowUs>
                    <FooterTitles>
                        Redes Sociais
                    </FooterTitles>
                    <LinksContainer>
                        <Link href="https://www.facebook.com/">
                            <LinkAndName>
                                <Logo src={require('../../../Resources/facebook.png')} />
                                <span>FACEBOOK</span>
                            </LinkAndName>
                        </Link>

                        <Link href="https://www.instagram.com/">
                            <LinkAndName>
                                <Logo src={require('../../../Resources/instagram.png')} />
                                <span>INSTAGRAM</span>
                            </LinkAndName>
                        </Link>

                        <Link href="https://www.gmail.com/">
                            <LinkAndName>
                                <Logo src={require('../../../Resources/email.png')} />
                                <span>E-MAIL</span>
                            </LinkAndName>
                        </Link>

                        <Link href="https://www.twitter.com/">
                            <LinkAndName>
                                <Logo src={require('../../../Resources/twitter.png')} />
                                <span>TWITTER</span>
                            </LinkAndName>
                        </Link>
                    </LinksContainer>

                </FollowUs>


            </FooterContainer>
        )
    }
}

export default Footer