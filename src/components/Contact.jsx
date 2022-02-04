import React from 'react';

const Contact = () => {
  return (
      <div id='contact'>
        <h1>CONTACT US</h1>
        <form>
            <input type='text' placeholder='Our Name' required/>
            <input type='email' placeholder='Our Email' required/>
            <textarea placeholder='Write Here....' name='message'></textarea>
            <input type='submit' value='Send'/>
        </form>
      </div>
  );
};

export default Contact;
