import React from 'react';

class CityIntro extends React.Component{
  constructor(props){
    super(props)
    this.state = {
    
    }
  }

  render(){
    return(
      <h2>Weather information for {this.props.city}</h2>
    )
  }
}

export default CityIntro;