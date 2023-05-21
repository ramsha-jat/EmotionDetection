import React, {useEffect} from 'react'
import '../../App.css';
import { Link } from 'react-router-dom';
import Webcam from "react-webcam";
function Dashboard() {

    // const videoConstraints = {
        // width: { min: 480 },
        // height: { min: 720 },
        // aspectRatio: 0.6666666667,
        // facingMode: "user"
      // };
    return (
        <>
            <section>
                <div className='container' style={{display: 'flex'}}>
                    <nav style={{
                        position: 'relative',
                        bottom: '0',
                        top: '0',
                        height: '100vh',
                        left: '0',
                        width: '170px',
                        overflow: 'hidden',
                        boxShadow: '0 20px 35px rgba(0,0,0,0.1)'
                    }}>
                        <ul>
                            <li>
                                <img src='logo.png' alt='logo' style={{
                                    paddingLeft: '15px',
                                    width: '140px',
                                    height: '140px',
                                    borderradius: '50%'
                                }}></img>
                                <span className='nav-item' style={{
                                    fontWeight: 'bold',
                                    paddingLeft: '15px',
                                    fontSize: '20px',
                                    textTransform: 'uppercase'
                                }}>Dashboard</span>
                            </li>

                            <li style={{marginTop: '20px'}} onClick={() => {
                                
                            }}>

                                <i className='fas fa-home' style={{
                                    position: 'relative',
                                    width: '70px',
                                    height: '40px',
                                    top: '14px',
                                    fontSize: '20px',
                                    textAlign: 'center'
                                }}></i>
                                <span className='nav-item'>Home</span>
                            </li>
                            <li style={{marginTop: '20px'}}>
                                <i className='fas fa-upload' style={{
                                    position: 'relative',
                                    width: '70px',
                                    height: '40px',
                                    top: '14px',
                                    fontSize: '20px',
                                    textAlign: 'center'
                                }}></i>
                                <span className='nav-item'>
                                <Link to='/uploadimage' className='linkhover' style={{textDecoration:'none',color:'#000000'}}>Upload</Link></span>
                            </li>
                            <li style={{marginTop: '20px'}}>
                                <i className='fa fa-eye' style={{
                                    position: 'relative',
                                    width: '70px',
                                    height: '40px',
                                    top: '14px',
                                    fontSize: '20px',
                                    textAlign: 'center'
                                }}></i>
                                <span className='nav-item'>
                                 <Link to='/view' className='linkhover' style={{textDecoration:'none',color:'#000000'}}>View</Link></span>
                            </li>
                            <li style={{marginTop: '20px'}}>
                                <i className='fa fa-download' style={{
                                    position: 'relative',
                                    width: '70px',
                                    height: '40px',
                                    top: '14px',
                                    fontSize: '20px',
                                    textAlign: 'center'
                                }}></i>
                                <span className='nav-item'><a href='#' download={'C:\Users\AL-MALAK\Desktop\csvIII\Emotion_detection_MUI\emotion\employees.csv'} style={{textDecoration:'none',color:'#000000'}}>Download</a>
                                </span>
                            </li>
                            <li style={{marginTop: '20px'}}>
                                <i className='fa fa-chart-bar' style={{
                                    position: 'relative',
                                    width: '70px',
                                    height: '40px',
                                    top: '14px',
                                    fontSize: '20px',
                                    textAlign: 'center'
                                }}></i>
                                <span className='nav-item'>Analytics</span>
                            </li>
                            <li style={{marginTop: '20px'}}>
                                <i className='fa fa-sign-out-alt' style={{
                                    bottom: '0',
                                    position: 'relative',
                                    width: '70px',
                                    height: '40px',
                                    top: '14px',
                                    fontSize: '20px',
                                    textAlign: 'center'
                                }}></i> <span className='nav-item' >
                                 <Link to='/' className='linkhover' style={{textDecoration:'none',color:'#000000'}}>Logout</Link></span>
                            </li>
                        </ul>
                    </nav>
                    <Webcam imageSmoothing={true}  screenshotFormat='image/webp'  />

                </div>
            </section>
            <section>
            </section>
        </>
    )
}
export default Dashboard;