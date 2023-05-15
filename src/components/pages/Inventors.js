import React from 'react'
import Footer from '../Footer'
import '../../App.css';
function Inventors() {
  return (
    <div className='bgs'>
      <h1 className='h1' style={{color:'#ef9937', position:'relative' ,left:'40%',paddingTop:'30px'}}>Team Members</h1>
      <div className='col-sm-6 col-md-4' style={{display:'flex',flexDirection:'row',marginRight:'60px',marginLeft:'60px'}}>
        <div className='team-item'>
            <img src='rimsha.png' alt='rimsha' className='team-img'></img>
            <h3>Ramsha</h3>
            <div className='team-info'>
              <p>Team Leader</p>
              <p>I am final year student at Sukkur IBA.I am  passionate about exploring the possibilities of machine learning algorithms to solve complex real-world problems, such as natural language processing or image recognition. </p>
              <ul className='team-icon'>
                <li><a href='www.twitter.com' className='twitter'>
                  <i className='fa fa-twitter'></i> 
                 </a></li>
                 <li><a href='https://github.com/ramshajat' className='github'>
                  <i className='fa fa-github'></i> 
                 </a></li>
                 <li><a href='https://www.linkedin.com/in/ramsha-ghulam-mustafa-675826194/' className='linkedin'>
                  <i className='fa fa-linkedin'></i> 
                 </a></li>
              </ul>
            </div>
            </div>

        <div className='team-item'>
            <img src='afzal.png' alt='Afzal' className='team-img'></img>
            <h3>Afzal</h3>
            <div className='team-info'>
              <p>Member</p>
              <p>I am a computer science graduate . My expertiese in data science including 
Data Analytics and Machine learning, MS Excel, CUDA,Database Management: MySQL, PostgreSQL, MongoDB, Amazon EC2, Apache Cassandra, Hadoop</p>
              <ul className='team-icon'>
                <li><a href='www.twitter.com' className='twitter'>
                  <i className='fa fa-twitter'></i> 
                 </a></li>
                 <li><a href='https://github.com/AfzalKamboh' className='github'>
                  <i className='fa fa-github'></i> 
                 </a></li>
                 <li><a href='https://www.linkedin.com/in/afzal-kamboh011/' className='linkedin'>
                  <i className='fa fa-linkedin'></i> 
                 </a></li>
              </ul>
            </div>
        </div>

        <div className='team-item'>
            <img src='kiswa.png' alt='Kiswa' className='team-img'></img>
            <h3>Kiswa</h3>
            <div className='team-info'>
              <p>Member</p>
              <p>I am final year student at Sukkur IBA.i have passion for both English grammar and Mathematics.I enjoy exploring the mathematical relationships between language and numbers, such as in cryptography or linguistics. </p>
              <ul className='team-icon'>
                <li><a href='www.twitter.com' className='twitter'>
                  <i className='fa fa-twitter'></i> 
                 </a></li>
                 <li><a href='https://github.com/kiswajan' className='github'>
                  <i className='fa fa-github'></i> 
                 </a></li>
                 <li><a href='https://www.linkedin.com/in/kiswa/' className='twitter'>
                  <i className='fa fa-linkedin'></i> 
                 </a></li>
              </ul>
            </div>
        </div>

      </div>
      <div className='team-item'>
            <img src='.png' alt='rimsha' className='team-img'></img>
            <h3>Dr.Sher Muhammad Daudpota</h3>
            <div className='team-info'>
              <p>Supervisor</p>
              <p>He is presently serving as Professor of Computer Science and Director of Quality Enhancement Cell at Sukkur IBA University. He teach Data Science, Machine Learning, Deep Learning, Natural Language Processing, Artificial Intelligence (AI) 
                and Programming Courses at Undergraduate and Post Graduate levels. He is also serving as Project Manager on recently awarded five years' NORPART-CONNECT (2022-2026) which is a partnership between Sukkur 
                IBA University and NTNU Norway for quality assurance in higher education.</p>
              <ul className='team-icon'>
                <li><a href='https://www.researchgate.net/profile/Sher-Daudpota' className='researchgate'>
                <i class="fa-brands fa-researchgate"></i>
                 </a></li>
                 <li><a href='https://www.iba-suk.edu.pk/faculty/details/INS-0019' className='faculty'>
                 <i class="fas fa-chalkboard-teacher"></i>
                 </a></li>
                 <li><a href='https://www.linkedin.com/in/sher-muhammad-daudpota-8ba7094b/' className='linkedin'>
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