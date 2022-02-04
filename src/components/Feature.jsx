import React from 'react';
import Featurebox from './Featurebox';
import filmage1 from '../images/1.svg';
import filmage2 from '../images/2.svg';
import filmage3 from '../images/3.svg';
import filmage4 from '../images/4.svg';

const Feature = () => {
  return ( 
    <div id='features'>
        <h1>FEATURES</h1>
        <div className='a-container'>
            <Featurebox image={filmage1} title='WeightLifting'/>
            <Featurebox image={filmage2} title='Speacific Music'/>
            <Featurebox image={filmage3} title='Flex Your Music'/>
            <Featurebox image={filmage4} title='Cardio Exertciser'/>
        </div>
    </div>
  );
};

export default Feature;
