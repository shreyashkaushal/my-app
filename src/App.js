import React,{Component} from 'react';
import './UserOutput';
import './UserInput';

import './App.css';
import UserInput from './UserInput';
import UserOutput from './UserOutput';
class App extends Component {
  state = {
    username : [{name:'shreyash'},{name:'shreya'},{name:'ajay'}]
  }

  manipulater = (event) =>{
   // console.log('this actually works');
   this.setState({username:[{name: event.target.value},{name:'shreya jain'},{name:'ajay choudhary'}]})
  }
  render(){
    return(
     <div className="App">
       <h1>hiii my first mini project</h1>
       <UserInput change={this.manipulater}
       displayName={this.state.username[0].name}></UserInput>
      
       <UserOutput name={this.state.username[0].name}
       changed={this.manipulater}>

       </UserOutput>
       <UserOutput name ={this.state.username[1].name}></UserOutput>
       <UserOutput name = {this.state.username[2].name}></UserOutput>
       <button onClick={this.manipulater}>Change the name</button>

     </div> 
    );
  }

}

export default App;
