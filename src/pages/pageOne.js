import React from 'react';
import './pageOne.css'
import PageTwo from './pageTwo'
import { faUser,faCog,faBook,faAddressBook,faAsterisk } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
class App extends React.Component {
constructor(props){
 super()
  this.state={
    menu:false,
  }
  this.openMenu = this.openMenu.bind(this)
}
openMenu(){
 
  this.setState(prevState => ({
    menu: !prevState.menu
  }));
  }

 render(){
 return (
   <div>
            <div class="sidenav">
            
            <a href="#" onClick={this.openMenu}><br/><span  style={{marginLeft:"30px"}}><img src={require('./prolearn logo 1.png')} /></span><br/></a><hr/>
            <a href="#" onClick={this.openMenu}><br/><span  className = "imgOne"><img src={require('./user1.png')} /></span><br/><span className="textStyle">Caroline</span></a>
            <a href="#" onClick={this.openMenu}><br/><span className = "imgOne"><img src={require('./book1.png')} /></span><br/><span  className="textStyle">Lesson Plans</span></a>
            <a href="#" onClick={this.openMenu}><br/><span className = "imgOne"><img src={require('./1.png')} /></span><br/><span className="textStyle">Supplementry classes</span></a>
            <a href="#" onClick={this.openMenu}><br/><span className = "imgOne"><img src={require('./settings1.png')} /></span><br/><span className="textStyle">Setting</span></a>
          </div>

          <div class="main">
            {this.state.menu && <PageTwo onChange={this.openMenu}/>}
          </div>
          </div>   
  );
 }
}

export default App;
