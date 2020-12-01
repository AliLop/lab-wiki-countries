import React from 'react';
import './App.css';
import Home from './components/Home'
import Navbar from './components/Navbar'
import { Switch, Route } from 'react-router-dom';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails'
import myCountries from '../src/countries.json';

class App extends React.Component {
  state = {
    countries: []
  }

  componentDidMount() {
    this.setState({
      countries: myCountries
    })
  }

  render() {
    return (
      <div className="App">
          <Navbar />
          <div style={{float: "left", height: "900px", overflow: "scroll"}}>
         <CountriesList countries={this.state.countries}/> 
         </div>
         <div style={{float: "right", marginRight: "150px"}}>
            <Switch>
              {/* <Route exact path='/' component={Home} /> */}
              {/* <Route exact path='/countries' component={CountriesList} /> */}
              <Route path='/countries/:key' component={CountryDetails} />
          </Switch>
          </div>
      </div>
    );
  }

  }

export default App;
