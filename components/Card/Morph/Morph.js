import React, { Component } from 'react';
import './Morph.scss'
const Morph = props => {

    return (

        <svg className="background" width="161" height="135" viewBox="0 0 161 135" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clipRule="evenodd" d="M112.009 98.5152C139.697 95.134 161 74.4774 161 49.5C161 22.1619 135.48 0 104 0C77.7065 0 55.5711 15.4607 48.9908 36.4848C21.3027 39.866 0 60.5226 0 85.5C0 112.838 25.5198 135 57 135C83.2935 135 105.429 119.539 112.009 98.5152Z" fill={ "#" + props.color } />
        </svg>

    )
}

export default Morph