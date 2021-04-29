import React, { useDebugValue } from 'react'

import Filters from './Filters'
import PetBrowser from './PetBrowser'

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      pets: [],
      filters: {
        type: 'all'
      }
    }
  }

  //newType = () => {
  //this.filters

  onChangeType = (e) => {
    this.setState({
      filters: { ...this.state.filters, type: e.target.value }
    })
    console.log(e.target.value)
  }
  //onFindPetsClick = () => {


  //}

  petsFetch = () => {
    fetch('/api/pets')
      .then(res => res.json())
      .then(petsObj => this.setState({ pets: petsObj }))
  }

  render() {
    console.log(this.state.filters)
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters onChangeType={this.onChangeType} />
              {/*onFindPetsClick = () => this.petsFetch()*/}
            </div>
            <div className="twelve wide column">
              <PetBrowser />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
