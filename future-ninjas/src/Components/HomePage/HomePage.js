import React from 'react';
import styled from 'styled-components';
import Header from './Header';
import Footer from './Footer';
import Banner from './Banner';
import SectionTips from './SectionTips';



const MainContainer = styled.div`
    font-family: 'Roboto', sans-serif;
`


class HomePage extends React.Component {
    constructor(props){
        super(props);

        this.state = {
        }
    }


    render() {
        return (
            <MainContainer>
            <Header changeCurrentPage={this.props.changeCurrentPage}/>
            <Banner changeCurrentPage={this.props.changeCurrentPage}/>
            <SectionTips />
            <Footer changeCurrentPage={this.props.changeCurrentPage}/>
            </MainContainer>
        )
    }
}



export default HomePage