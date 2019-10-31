import React from 'react';
import Text from './Text';

const Card = (props) => {
    return(
      <div className="card">
      <div className="cardImg">
      <img src = {props.pic}/>
      
  
      </div>
      <Text text = {props.text} topic = {props.topic}/>
      </div>
    )
  }

  export default Card;