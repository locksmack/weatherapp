import React from 'react';

class CityConditions extends React.Component{
  constructor(props){
    super(props)
    this.state = {
    
    }
  }

  render(){
    if(this.props.data != null){
      const icon = `http://openweathermap.org/img/wn/${this.props.data.weather[0].icon}@2x.png`
      return(
        <div>
          <div className='row'>
            <div className='col-6 col-sm-9'>
              <span className='current-temp'>{this.props.data.main.temp.toFixed(1)}&deg;C</span>
            </div>
            <div className='col-6 col-sm-3'>
              <img src={icon} alt={this.props.data.weather[0].main} />
            </div>
          </div>
          <div className='row'>
            <div className='col-md-12'>
              <h3>Today's conditions</h3>
              <div className='row conditions'>
                <div className='col-sm-3'>
                  <span>Minimum Temperature</span>
                  {this.props.data.main.temp_max}&deg;C
                </div>
                <div className='col-sm-3'>
                  <span>Maximum Temperature</span>
                  {this.props.data.main.temp_min}&deg;C
                </div>
                <div className='col-sm-3'>
                  <span>Humidity</span>
                  {this.props.data.main.humidity}%
                </div>
                <div className='col-sm-3'>
                  <span>Atmospheric Pressure</span>
                  {this.props.data.main.pressure} hPa
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    }
    return(
      <p>Please select a city</p>
    )
  }
}

export default CityConditions;