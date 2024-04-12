import React from 'react';
import './contact.css'

function Contact() {
  return (
    <div className='container'>
        <div className='form-width'  >
        <div className='form-align' style={{ textAlign: 'center' }}>
            <h2>Contact</h2>
            <p>We'd love to hear from you  . Please fill out the below form or reach out to us usingmthe contact details provided</p>
            </div>
       
      <form>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
          <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
          {/* <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div> */}
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
          <input type="password" className="form-control" id="exampleInputPassword1" />
        </div>
        <div class="form-group">
              <label for="message">Feedback</label>
              <textarea class="form-control" id="message" name="message" rows="5" required></textarea>
            </div>
            <div  className='submit-btn'>
        <button type="submit" className="btn btn-success">Submit</button>
        </div>
      </form>
      </div>
    </div>
  );
}

export default Contact;

