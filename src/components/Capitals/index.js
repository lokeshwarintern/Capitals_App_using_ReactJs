import {Component} from 'react'

import './index.css'

const countryAndCapitalsList = [
  {
    id: 'NEW_DELHI',
    capitalDisplayText: 'New Delhi',
    country: 'India',
  },
  {
    id: 'LONDON',
    capitalDisplayText: 'London',
    country: 'United Kingdom',
  },
  {
    id: 'PARIS',
    capitalDisplayText: 'Paris',
    country: 'France',
  },
  {
    id: 'KATHMANDU',
    capitalDisplayText: 'Kathmandu',
    country: 'Nepal',
  },
  {
    id: 'HELSINKI',
    capitalDisplayText: 'Helsinki',
    country: 'Finland',
  },
]

class Capitals extends Component {
  state = {
    capitalCity: countryAndCapitalsList[0],
  }

  getCapitalCity = event => {
    const countryList = countryAndCapitalsList.filter(
      eachItem => eachItem.id === event.target.value,
    )

    this.setState({capitalCity: countryList[0]})
  }

  render() {
    const {capitalCity} = this.state
    const {country} = capitalCity
    return (
      <div className="bg-container">
        <div className="country-list-card">
          <h1>Countries and Capitals</h1>
          <div className="select-para-ele">
            <select className="select-ele" onChange={this.getCapitalCity}>
              {countryAndCapitalsList.map(eachItem => (
                <option key={eachItem.id} value={eachItem.id}>
                  {eachItem.capitalDisplayText}
                </option>
              ))}
            </select>
            <p> is capital of which country</p>
          </div>

          <h1 className="country-ele">{country}</h1>
        </div>
      </div>
    )
  }
}

export default Capitals
