import React from 'react'; 
import myCountries from '../countries.json';
import { Link } from 'react-router-dom';

class CountryDetails extends React.Component{

    state = {
        name: '',
        capital: '',
        area: '',
        borders: [],
        cca3: ''
    }

    componentDidMount() {
        //first tiem it loads 
        this.getCountryDetails();
    }

    componentDidUpdate(prevProps, prevState) {
        //al of teh other times
        if (prevProps !== this.props) {
            //this means the URl changed
            this.getCountryDetails();
        }
    }

    getCountryDetails = () => {
        let countrykey = this.props.match.params.key;
        let foundCountry = myCountries.find((country) => {
            return country.cca3 === countrykey;
        });
        this.setState({
            name: foundCountry.name.common,
            capital: foundCountry.capital[0],
            area: foundCountry.area,
            borders: foundCountry.borders,
            cca3: foundCountry.cca3
        })
    }

    render() {
        return(
            <div>
                <h3>{this.state.name}</h3>
                <p>Capital: {this.state.capital}</p>
                <p>Area: {this.state.area} km2</p>
                <ul>Borders: <br/>
                    {this.state.borders.map((border) => {
                        return (
                            <li>
                            <Link exact to={`/countries/${border}`}> 
                                {border}
                            </Link>
                            </li>
                        )
                    })}
                </ul>
            </div>
        )
    }
}
export default CountryDetails;