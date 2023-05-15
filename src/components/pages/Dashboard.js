import React from 'react'
import '../../App.css';

function Dashboard() {
  return (
    <>
    <section>
    <div className='container' style={{display: 'flex'}}>
      <nav style={{ position: 'relative',bottom: '0', top:'0', height: '100vh',left: '0', width: '170px',overflow: 'hidden',boxShadow: '0 20px 35px rgba(0,0,0,0.1)'}}>
        <ul>
          <li >
            <img src='logo.png' alt='logo' style={{ paddingLeft:'15px',width: '140px',  height: '140px', borderradius: '50%'}}></img>
            <span className='nav-item' style={{fontWeight:'bold',paddingLeft:'15px',fontSize:'20px',textTransform:'uppercase'}}>Dashboard</span>
          </li>

          <li style={{marginTop:'20px'}} onClick={()=>{alert('hello')}}>
            
              <i className='fas fa-home' style={{position:'relative',width:'70px',height:'40px',top:'14px',fontSize:'20px',textAlign:'center'}}></i>
              <span className='nav-item'>Home</span>
          </li>
          <li style={{marginTop:'20px'}} onClick={()=>{<input type="file" accept="image/jpeg, image/png, image/jpg">select image</input>}}>
             <i className='fas fa-upload' style={{position:'relative',width:'70px',height:'40px',top:'14px',fontSize:'20px',textAlign:'center'}}></i>
              <span className='nav-item' >Upload</span>
          </li>
          <li style={{marginTop:'20px'}}>
            <i className='fa fa-eye' style={{position:'relative',width:'70px',height:'40px',top:'14px',fontSize:'20px',textAlign:'center'}}></i>
              <span className='nav-item'>View</span>
          </li>
          <li style={{marginTop:'20px'}}>
              <i className='fa fa-download' style={{position:'relative',width:'70px',height:'40px',top:'14px',fontSize:'20px',textAlign:'center'}}></i>
              <span className='nav-item'>Download</span>
          </li>
          <li style={{marginTop:'20px'}}>
              <i className='fa fa-chart-bar' style={{position:'relative',width:'70px',height:'40px',top:'14px',fontSize:'20px',textAlign:'center'}}></i>
              <span className='nav-item'>Analytics</span>
          </li>
          <li style={{marginTop:'20px'}}>
              <i className='fa fa-sign-out-alt' style={{bottom:'0' ,position:'relative',width:'70px',height:'40px',top:'14px',fontSize:'20px',textAlign:'center'}}></i>
              <span className='nav-item'>Logout</span>
          </li>
        </ul>
      </nav>
    </div>
    </section>
    <section >
      <div>

      </div>
    </section>
    </>
  )
}

export default Dashboard