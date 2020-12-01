import React from 'react';
import { Link } from 'react-router-dom';
//import myCountries from '../countries.json';
function CountriesList (props) {
  
        return props.countries
        ? (
            <div>
               <h2>Countries</h2>
               {props.countries.map((country) => {
                   return(
                       <div key={country.cca3}>

                       <Link exact to={`/countries/${country.cca3}`}>
                       {country.name.common}</Link> 
                       </div>
                   )
               })}
            </div>
        )
        : null
 
}

export default CountriesList