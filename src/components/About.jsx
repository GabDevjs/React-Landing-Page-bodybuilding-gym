import React from 'react';
import aboutImag from '../images/about.png';

const About = () => {
  return (
      <div id='about'>
            <div className='about-image'>
                <img src={aboutImag} alt=''/>
            </div>
            <div className='about-text'>
                <h1>LEAR MORE ABOUT US</h1>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eget enim a enim lacinia pellentesque. Curabitur id orci sagittis, ultricies dui cursus, consequat elit. Donec elementum arcu elit, vitae pulvinar augue euismod ut. Vestibulum quis lorem nulla. 
                </p>
                <button>READ MORE</button>
            </div>
      </div>
  );
};

export default About;
