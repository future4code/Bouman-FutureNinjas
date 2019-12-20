import React from 'react';
import Header from '../HomePage/Header/index';
import Main from './Main';
import Footer from './Footer';



function SearchPage(props) {
  return (
    <div>
      <Header changeCurrentPage={props.changeCurrentPage}/>
      <Main/>
      <Footer/>
    </div>
  );
}
  


export default SearchPage;