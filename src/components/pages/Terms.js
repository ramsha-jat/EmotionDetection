import React from 'react';
import '../../App.css';
import Footer from '../Footer';

function Terms() {
  return <div>
    <div className='bgs'>
      <h1 className='h1'style={{color:'#ef9937'}}>Terms Of Services </h1>
     <h2 className='h2'>How do we use your data?</h2> 
     <br></br>
     <p className='ptos'>This Notice explains how we uses, and discloses personal information about you (your “personal information” or “personal data”) when you visit this website or contact us using the information provided there.</p>
     <br></br>
     <p className='ptos'>Your personal data is processed only when necessary and when there is an appropriate legal basis under the provisions of the General Data Protection Regulation.We feels strongly about the protection of the personal data of its employees, visitors, users of its website, and all other users of our services and will treat such personal information as confidential information and a business secret.</p>
     <br></br>
    <p className='ptos'>We utilize the personal data we gather on this website for the following purposes:</p>
    <br></br>
    <ul style={{marginLeft:'2rem'}}>
      <li className='ptos'>
      Fulfilling your requests
      </li>
      <br></br>
      <li className='ptos'>
        Maintaining the website itself personalize it for you 
        </li>
        <br></br>
      <li className='ptos'>
        Your personal data is stored in accordance with the terms
        </li>
        <br></br>
      <li className='ptos'>
         In order to ensure adequate confidentiality, integrity, and availability of personal data, we apply appropriate technical and organizational security measures 
         </li>
    </ul>
     </div>
    <Footer></Footer>
  </div>;}
  export default Terms;