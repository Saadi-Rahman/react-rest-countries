import React from 'react';
import './Country.css';

const Country = (props) => {
    // console.log(props.country);
    const {name, flags, area, region, population} = props.country;
    return (
        <div className='countryItems shadow-lg p-3 bg-light rounded'>
            <h5>{name}</h5>
            <img src={flags.png} alt="" />
            <h6>Region: {region}</h6>
            <p><small>Area: {area}</small></p>
            <p><small>Population: {population}</small></p>
        </div>
    );
};

export default Country;