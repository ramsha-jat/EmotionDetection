import React from 'react'
import Footer from '../Footer'
import Cards from '../Cards'
function Support() {
  return (
    <div className='bgs'>
        <div style={{textAlign:'center',margin:'30px',fontWeight:'bold',fontSize:'35px',color:'#FFFFFF'}}>Welcome to our Customer Support Portal</div>
        <p style={{color:'#FFFFFF',textAlign:'center'}}> Welcome to the customer support portal for facial emotion detection. Here you can find answers to frequently asked questions, as well as contact information for our support team.</p>
      <p style={{color:'#FFFFFF',textAlign:'center'}}>We are always working to improve our facial emotion detection technology. 
        By providing us with your data, you can help us to train our models to better
         understand the nuances of human emotion. Your data will be used anonymously and will 
         not be shared with any third parties.</p>
<p style={{color:'#FFFFFF',textAlign:'center'}}>
Thank you for your help in making our facial emotion detection technology even better.</p>
<h2 style={{color:'#FFFFFF',textAlign:'center'}}>Contact Information</h2>
<p style={{color:'#FFFFFF',textAlign:'center'}}>If you have any questions or problems with facial emotion detection, please contact our support team at 
  <a href="mailto:ramsha.bscsf19@iba-suk.edu.pk " style={{color:'#FFFFFF',textAlign:'center'}}>  ramsha.bscsf19@iba-suk.edu.pk</a></p>
      <Cards></Cards>
        <Footer></Footer>
    </div>
  )
}

export default Support