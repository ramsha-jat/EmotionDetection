import React from 'react'
import Footer from '../Footer'
import '../../App.css';
function Inventors() {
  return (
    <div className='bgs'>
      <h1 className='h1' style={{color:'#ef9937', position:'relative' ,left:'40%',paddingTop:'30px'}}>Team Members</h1>
      <div className='col-sm-6 col-md-4' style={{display:'flex',flexDirection:'row',marginRight:'60px',marginLeft:'60px'}}>
        <div className='team-item'>
            <img src='logo.png' alt='rimsha' className='team-img'></img>
            <h3>Ramsha</h3>
            <div className='team-info'>
              <p>Team Leader</p>
              <p>She is final year student at Sukkur IBA.</p>
              <ul className='team-icon'>
                <li><a href='/#' className='twitter'>
                  <i className='fa fa-twitter'></i> 
                 </a></li>
                 <li><a href='/#' className='github'>
                  <i className='fa fa-github'></i> 
                 </a></li>
                 <li><a href='#' className='twitter'>
                  <i className='fa fa-linkedin'></i> 
                 </a></li>
              </ul>
            </div>
            </div>

        <div className='team-item'>
            <img src='logo.png' alt='Afzal' className='team-img'></img>
            <h3>Afzal</h3>
            <div className='team-info'>
              <p>Member</p>
              <p>He is final year student at Sukkur IBA.</p>
              <ul className='team-icon'>
                <li><a href='#' className='twitter'>
                  <i className='fa fa-twitter'></i> 
                 </a></li>
                 <li><a href='#' className='twitter'>
                  <i className='fa fa-github'></i> 
                 </a></li>
                 <li><a href='#' className='twitter'>
                  <i className='fa fa-linkedin'></i> 
                 </a></li>
              </ul>
            </div>
        </div>

        <div className='team-item'>
            <img src='logo.png' alt='Kiswa' className='team-img'></img>
            <h3>Afzal</h3>
            <div className='team-info'>
              <p>Member</p>
              <p>She is final year student at Sukkur IBA.</p>
              <ul className='team-icon'>
                <li><a href='#' className='twitter'>
                  <i className='fa fa-twitter'></i> 
                 </a></li>
                 <li><a href='#' className='twitter'>
                  <i className='fa fa-github'></i> 
                 </a></li>
                 <li><a href='#' className='twitter'>
                  <i className='fa fa-linkedin'></i> 
                 </a></li>
              </ul>
            </div>
        </div>
    
      </div>
      <Footer></Footer>
    </div>
  )
}

export default Inventors