import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {Header} from './components/header';
import {Banner} from './components/banner';
import {About} from './components/about';
import {Rooms} from './components/rooms';
import {Package} from './components/package';
import {ElegantRoom} from './components/elegantRoom';
import {Contact} from './components/contact';
import {Footer} from './components/footer';
import './App.css';
class App extends React.Component{
  constructor(props){
    super(props);
    this.state={};
  }
  render(){
    return(
      <div>
      <Header/>
      <Banner/>
      <div className='container-fluid'>
      <About/>
      <Rooms/>
      <ElegantRoom/>
      <Package/>
      <Contact/>
      <Footer/>
      </div>
      </div>
    )
  }
}

export default App;
