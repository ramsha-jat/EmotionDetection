import React from 'react';
import '../../App.css';
import Footer from '../Footer';

function Works() {
  return <div>
<div style={{display:'flex'}}>
    <div className='bgs' style={{width:'50%',fontFamily:' Roboto,sans-serif'}}>
      <h2 style={{ color:'#ef9937',fontSize:'2.3rem',textAlign:'left',marginLeft:'2rem',width:'466px',lineHeight:'2.3rem',marginTop:'1rem',marginBottom:'0.5rem'}}>How It Works?</h2>
      <br></br>
      <p style={{color:'#ffffff', fontSize:'1rem',textAlign:'left',marginLeft:'2rem',width:'466px',marginBottom:'0.5rem'}}>Have you ever heard about facial expression recognition? Although the term might sound all Greek to some people, it turns out that we’ve been adapting our messages and tone of voice to facial expressions of our interlocutors for centuries!</p>
      <br></br>
      <p style={{color:'#ffffff', fontSize:'1rem',textAlign:'left',marginLeft:'2rem',width:'466px',marginTop:'1rem',marginBottom:'0.5rem'}}>If you’re fed up with linear media and passive consumption, we’ve something special for you.</p>
      <br></br>
      <p style={{color:'#ffffff', fontSize:'1rem',textAlign:'left',marginLeft:'2rem',width:'466px',marginTop:'1rem',marginBottom:'0.5rem'}}>This uses artificial intelligence and cutting-edge algorithms to evaluate recipients’ non-verbal reactions and responses to the message, products, goods, and services.</p>
      <br></br>
      <p style={{color:'#ffffff', fontSize:'1rem',textAlign:'left',marginLeft:'2rem',width:'466px',marginTop:'1rem',marginBottom:'0.5rem'}}>Our facial expression recognition software employs face detection technology to monitor and evaluate the sentiments on a human face. This can be done thanks to the advanced image dispensation method that makes it possible to gather real-time information about human responses.</p>
      <br></br>
      <p style={{color:'#ffffff', fontSize:'1rem',textAlign:'left',marginLeft:'2rem',width:'466px',marginTop:'1rem',marginBottom:'0.5rem'}}>As each facial expression activates different muscles, deep learning AI is able to determine basic emotions such as sadness, happiness, anger, disgust, fear, surprise, or contempt.</p>
      <br></br>
    </div>
    <div className='bgw' style={{width:'50%'}}></div>
    </div>
    <Footer></Footer>
  </div>;
}
export default Works;