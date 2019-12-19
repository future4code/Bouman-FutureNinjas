import React from 'react';
import axios from 'axios';
import styled from 'styled-components';
import Header from './Header';
import Footer from './Footer';
import Banner from './Banner';
import SectionTips from './SectionTips';

const MainContainer = styled.div`
    font-family: 'Roboto', sans-serif;
`

class HomePage extends React.Component {

    render() {
        return (
            <MainContainer>
            <Header />
            <Banner />
            <SectionTips />
            <Footer />
            </MainContainer>
        )
    }
}

export default HomePage