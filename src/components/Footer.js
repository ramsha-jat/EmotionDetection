import React from 'react';
import './Footer.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
          Join Emotion Statistics to get average Emotional index at your work place
        </p>
        <p className='footer-subscription-text'>
          You can unsubscribe at any time.
        </p>
        <div className='input-areas'>
          <form>
            <input
              className='footer-input'
              name='email'
              type='email'
              placeholder='Your Email'
            />
            <Button buttonStyle='btn--outline'>Subscribe</Button>
          </form>
        </div>
      </section>
      <div className='footer-links'>
        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
            <h2>About Us</h2>
            <Link to='/work' className='linkhover'>How it works</Link>
            <Link to='/inventors' className='linkhover'>Inventors</Link>
            <Link to='/term' className='linkhover'>Terms of Service</Link>
          </div>
          <div className='footer-link-items'>
            <h2>Contact Us</h2>
            <Link to='/contact' className='linkhover'>Contact</Link>
            <Link to='/support' className='linkhover'>Support</Link>
          </div>
        </div>
        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
            <h2>Social Media</h2>
            <a href='https://www.instagram.com/emotiondetection' className='linkhover'>Instagram</a>
            <a href='https://www.facebook.com/the.emotional.detective' className='linkhover'>Facebook</a>
            <a href='https://twitter.com/ThinkEmotions' className='linkhover'>Twitter</a>
          </div>
        </div>
      </div>
      <section className='social-media'>
        <div className='social-media-wrap'>
          <div className='footer-logo'>
            <Link to='/' className='social-logo'>
          <img src ='logo.png' alt ='emotion' style={{height:'150px' ,width:'150px'}}/>
            </Link>
          </div>
          <small className='website-rights'>Employee Emotion Detection © 2023</small>
          <div className='social-icons'>
          <a href='https://www.facebook.com/the.emotional.detective' className='social-icon-link facebook'> 
              <i className='fab fa-facebook-f' />
          </a>
          <a href='https://www.instagram.com/emotiondetection' className='social-icon-link instagram' >
               <i className='fab fa-instagram' />
          </a>
          <a href='https://twitter.com/ThinkEmotions'  className='social-icon-link twitter'>
              <i className='fab fa-twitter' />
          </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;