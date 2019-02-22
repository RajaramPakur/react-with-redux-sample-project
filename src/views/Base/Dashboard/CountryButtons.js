import React from 'react';

const state = {
    ButtonCountry: [
        {
            countryName: 'United States',
            countryCode: 'US',
            active: 'btn-primary',
        }, {
            countryName: 'Australia',
            countryCode: 'AU',
            active: 'btn-secondary',
        }, {
            countryName: 'China',
            countryCode: 'CN',
            active: 'btn-secondary',
        }, {
            countryName: 'India',
            countryCode: 'IN',
            active: 'btn-secondary',
        }, {
            countryName: 'Japan',
            countryCode: 'JP',
            active: 'btn-secondary',
        }, {
            countryName: 'Russia',
            countryCode: 'RU',
            active: 'btn-secondary',
        }, {
            countryName: 'South Korea',
            countryCode: 'KR',
            active: 'btn-secondary',
        }, {
            countryName: 'United Kingdom',
            countryCode: 'GB',
            active: 'btn-secondary',
        }, {
            countryName: 'Germany',
            countryCode: 'DE',
            active: 'btn-secondary',
        }
    ]
}

const CountryButtons = (props) => {
    const sendCountryCode = (e) => {
        e.preventDefault();
        props.countryCode(e.target);
        state.ButtonCountry.filter((country) => {
            console.log(country + " " + e.target.value);
            if (country.countryCode === e.target.value) {
                country.active = 'btn-primary';
                return country;
            } else {
                country.active = 'btn-secondary'
                return country;
            }
        });
    };

    let button;
    button = state.ButtonCountry.map((btn, index) => {
        return (<button key={index} type="button" className={`btn ${btn.active}`} onClick={sendCountryCode.bind(this)} value={btn.countryCode}>{btn.countryName}</button>);
    });

    return (
        <div className="btn-group" role="group" aria-label="Basic example">
            {button}
        </div>
    )
}

export default CountryButtons
