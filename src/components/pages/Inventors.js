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
              <p>I am final year student at Sukkur IBA.I am  passionate about exploring the possibilities of machine learning algorithms to solve complex real-world problems, such as natural language processing or image recognition. </p>
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
              <p>I am a computer science graduate . My expertiese in data science including 
Data Analytics and Machine learning, MS Excel, CUDA,Database Management: MySQL, PostgreSQL, MongoDB, Amazon EC2, Apache Cassandra, Hadoop</p>
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
            <h3>Kiswa</h3>
            <div className='team-info'>
              <p>Member</p>
              <p>I am final year student at Sukkur IBA.i have passion for both English grammar and Mathematics.I enjoy exploring the mathematical relationships between language and numbers, such as in cryptography or linguistics. </p>
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
      <div className='team-item'>
            <img src='logo.png' alt='rimsha' className='team-img'></img>
            <h3>Dr.Sher Muhammad Daudpota</h3>
            <div className='team-info'>
              <p>Supervisor</p>
              <p> </p>
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

      <Footer></Footer>
    </div>
  )
}

export default Inventors