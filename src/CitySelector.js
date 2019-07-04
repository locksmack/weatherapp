import React from 'react';

class CitySelector extends React.Component{
  constructor(props){
    super(props)
    this.state = {
    
    }
  }

  render(){
    return(
      <form>
        <label htmlFor='CitySelector'>Select your city: </label>
        <select id='CitySelector' name='CitySelector' value={this.props.city} onChange={this.props.updateCity}>
          <option value='Melbourne'>Melbourne</option>
          <option value='Sydney'>Sydney</option>
          <option value='Brisbane'>Brisbane</option>
          <option value='Perth'>Perth</option>
          <option value='Adelaide'>Adelaide</option>
          <option value='Hobart'>Hobart</option>
          <option value='Canberra'>Canberra</option>
          <option value='Darwin'>Darwin</option>
        </select>
      </form>
    )
  }
}

export default CitySelector;