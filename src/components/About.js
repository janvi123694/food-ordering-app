import React from 'react'
import User from './User'; 
import UserClass from './UserClass';
import UserContext from '../utils/useContext';
class About extends React.Component{
  constructor(props){
    //console.log("Par cons");
    super(props);
    this.state = {
        userInfo : {
          id : 1, 
          name : 'default name', 
          location : 'default location'
        }
    }
  }
  

  async componentDidMount(){
    
    //console.log("Par compo mount");
  }

  render(){
    console.log("Par render");
    return (
      <div>
      <h2>About Section</h2>
      <User/>
      <UserContext.Consumer>
        { (data) => <h1 className='text-center text-lg font-bold m-3'> Context Data : {data.loggedInUser}</h1>}
      </UserContext.Consumer>
      <UserClass name="a"/>
    </div>
    )
  }
}


export default About
