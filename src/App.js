import React from 'react';
import first from './images/images1.jpeg';
import second from './images/images2.jpeg';
import third from './images/images3.jpeg';
import fourth from './images/images4.jpeg';
import fifth from './images/images5.jpeg';
import sixth from './images/images6.jpeg';

import Card from './Card';
import './App.css';



class App extends React.Component  {
  render(){
    return(
      <div className="App">
        <div>
          <h3>News Headlines</h3>
          <div>
            <Card pic = {first} text = "Planet" topic = "Whats for lunch"/>
            <Card pic = {second} text = "Dog" topic = "World hunger"/>
            <Card pic = {third} text = "Pokemon" topic = "POKEMON"/>
          
          </div>
        </div>

        <div>
          <h3>Sports Headlines</h3>
          <div>
          <Card pic = {fourth} text = "Crouch" topic = "Crouchy forcasts weather"/>
            <Card pic = {fifth} text = "Ball" topic = "GOAL!!!"/>
            <Card pic = {sixth} text = "Bridge" topic = "On water"/>

           
          </div>
        </div>
      </div>
    )
  }
}



export default App;
