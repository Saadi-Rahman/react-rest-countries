import React, { useEffect, useState } from 'react';
import Country from '../Country/Country';
import './Countries.css';

const Countries = () => {
    const [countries, setCountries] = useState([]);

    // useEffect( ()=>{}, []);
    useEffect ( ()=>{

        fetch('https://restcountries.com/v2/all')
        .then(res => res.json())
        .then(data => setCountries(data));

    }, [])

    return (
        <div>
            <h2 className='pb-3'>Available countries: {countries.length}</h2>
            <div className='countries-container'>
                {
                    countries.map(country => <Country 
                        country={country}
                        key={country.numericCode}
                        ></Country>)
                }
            </div>
        </div>
    );
};

export default Countries;