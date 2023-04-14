import React from 'react';
import '../../App.css';
import Footer from '../Footer';

export default function Services() {
  return <div>
      <div style={{display:'flex',flexDirection:'row'}}>
    <div className='bgs' style={{width:'50%',fontFamily:' Roboto,sans-serif'}}>
    <h1 className='h1' style={{color:'#FFFFFF'}}><strong style={{color:'#ef9937'}}>Employee Facial Emotion AI provider</strong> for Inovative Enterprises</h1>
    <p className='p'>We aim to boost the experiences of customers, students, candidates, 
      employees and users, through an empathetic data driven approach, 
      with a focus on <strong style={{color:'#ef9937'}}>privacy</strong>,
                     <strong style={{color:'#ef9937'}}>ethical principles </strong>
                and <strong style={{color:'#ef9937'}}>upholding eco-sustainability.</strong></p>
    <h2 className='h2' style={{marginTop:'1rem'}}>
    What are 
    <strong style={{color:'#ef9937'}}>Emotion AI</strong> and
     <strong style={{color:'#ef9937'}}>Facial Emotion Recognition</strong>?
    </h2>
    <br></br>
    <p className='p'>
    Emotion AI, also known as Affective Computing, is the field of computer science that enables computers to recognize, 
    interpret, and simulate human emotions.</p>
    <br></br>
    <p className='p'>Facial Emotion Recognition (FER) is a subfield of Emotion AI that focuses on detecting emotions from facial expressions.</p>
    <br></br>
    <p className='p'>
     Emotion AI can be used to develop applications and services that interact with users in a more human and natural way, based on the detection of their mood, feelings, or emotions displayed in their facial expressions.
    </p>
    <br></br>
    <h2 className='h2'>
    <strong style={{color:'#ef9937'}}>Empowering digital interactions</strong> with Emotion AI
    </h2>
    <br></br>
    <p className='p'>
    Digital interactions are the most powerful way to reach all of your users, wherever they are and through many touch points. But not all interactions are really effective and satisfying. Our goal is to solve that.</p>
    <br></br>
    <p className='p'>Utilizing Emotion AI, you can gain insights into your users' emotions, enabling you to provide impactful and optimized experiences for each of them.</p>
   <br></br>
    <p className='p'>
    A tailored, meaningful, and context-aware experience for every individual, specifically shaped by their unique emotional responses. Emotion AI can enhance user experiences and boost your business growth, according to business strategies.
    </p>
    <br></br>
    </div>
    <div style={{width:'50%',color:'#000000'}}>
    <video src='servicevid.mp4' autoPlay loop muted style={{width:'50%', height:"30rem",border:'1px solid green',margin:'1rem'}}/>
    </div>
    </div>
    <Footer></Footer> 
  </div>;
}