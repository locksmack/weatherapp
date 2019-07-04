import React from 'react';
import CitySelector from './CitySelector'
import CityIntro from './CityIntro'
import CityConditions from './CityConditions'

const apiKey = 'bb760ac0da9cd84b0bf2f6cbc5ed16a9'
const apiEndpoint = `https://api.openweathermap.org/data/2.5/weather?APPID=${apiKey}&units=metric&q=`

class Weather extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      city: "Melbourne",
      data: null,
      isLoading: true
    }

    this.updateCity = this.updateCity.bind(this)
    this.getWeather = this.getWeather.bind(this)

    {/* Call API on pageload for default state */}
    this.getWeather();
  }

  updateCity(e){
    this.setState({
      city: e.target.value,
      isLoading: true
    })
    this.getWeather()
  }

  getWeather(){
    var url = apiEndpoint + this.state.city;
    fetch(url)
      .then(response => response.json())
      .then(data => this.setState({ data, isLoading: false }));
  }

  render(){
    if(this.state.isLoading){
      return <main><img src='/img/loading.gif' alt='Loading' className='d-block loading'/></main>
    }
    return(
      <main>
        <div className='row'>
          {/* City Selector */}
          <div className='col-md-3 order-md-2'>
            <CitySelector city={this.state.city} updateCity={this.updateCity} />
          </div>
          <div className='col-md-9 order-md-1'>
            {/* City Intro */}
            <CityIntro city={this.state.city} />
            {/* Current Conditions */}
            <CityConditions data={this.state.data} />
          </div>
        </div>
      </main>
    )
  }
}

export default Weather;