import React from 'react';
import HomePage from './Components/HomePage/HomePage';
import JobsPage from './Components/JobsPage/index'
import ComoFunciona from './Components/ComoFunciona/index'
import SearchPage from './Components/SearchPage/index'


let tela;

class App extends React.Component {
  constructor(props){
    super(props);

    tela = <HomePage changeCurrentPage={this.changeCurrentPage}/>

    this.state = {
      currentPage: tela,
    }
  }


  changeCurrentPage = (redirect) => {
    switch(redirect){
      case 'homePage':
        tela = <HomePage changeCurrentPage={this.changeCurrentPage}/>
        this.setState({currentPage: tela,})
      break;
      case 'jobsPage':
        tela = <JobsPage changeCurrentPage={this.changeCurrentPage}/>
        this.setState({currentPage: tela,})
      break;
      case 'comoFunciona':
        tela = <ComoFunciona changeCurrentPage={this.changeCurrentPage}/>
        this.setState({currentPage: tela,})
      break;
      case 'searchPage':
        tela = <SearchPage changeCurrentPage={this.changeCurrentPage}/>
        this.setState({currentPage: tela,})
      break;
    }
  }


  render() {
    return (
      <div>
        {tela}
      </div>
    );
  }
}



export default App;