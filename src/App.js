import React from 'react';
import Header from './Header'
import Weather from './Weather'
import Footer from './Footer'

class App extends React.Component{
  constructor(props){
    super(props)
    this.state = {
    
    }
  }

  render(){
    return(
      <div className='container'>
        <Header />
        <Weather />
        <Footer />
      </div>
    )
  }
}

export default App;