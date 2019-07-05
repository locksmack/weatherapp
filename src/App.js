import React from 'react';
import Header from './Header'
import Weather from './Weather'
import Footer from './Footer'

function App(){
    return(
      <div className='container'>
        <Header />
        <Weather />
        <Footer />
      </div>
    )
}

export default App;