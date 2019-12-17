import React from 'react';
import axios from 'axios';
import styled from 'styled-components';
import Header from './Header';
import Footer from './Footer';



class HomePage extends React.Component {

    render() {
        return (
            <div>
            <Header />

            <Footer />
            </div>
        )
    }
}

export default HomePage