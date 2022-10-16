import React from 'react';
import Bonjour from './Bonjour';
import Equipe from './Equipe';
import Mission from './Mission';
import Notre from './Notre';
import Vision from './Vision';

const Homepage = () => {
    return (
        <div className="font-poppins">
            <Bonjour/>
            <Notre/>
            <Mission/>
            <Vision />
            <Equipe/>
        </div>
    );
};

export default Homepage;