
import React from 'react';
import './app.scss';  
import Header from './components/header.js';
import Footer from './components/footer.js';
import Main from'./components/main.js';


class App extends React.Component{
  render(){
    return(
      <React.Fragment>
        <Header/>
        <Main/>
        <Footer/>
      </React.Fragment>
    );
  }
}
export default App;