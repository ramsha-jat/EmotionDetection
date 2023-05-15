import React from 'react'
import Cards from '../Cards'
import Footer from '../Footer'

const Contact = () => {
  const [formStatus, setFormStatus] = React.useState('Submit')
  const onSubmit = (e) => {
    e.preventDefault()
    setFormStatus('Submitting...')
    const { name, email, message } = e.target.elements
    let conFom = {
      name: name.value,
      email: email.value,
      message: message.value,
    }
    console.log(conFom)
  }
  return (
    <div>
    <div className="container mt-5 ">
      <h2 className="mb-3" style={{textAlign:'center',margin:'20px',fontSize:'30px',Color:'#FFFFFF'}}>Feel Free To Contact Us</h2>
      <div align="center">
      <form className='bgs' onSubmit={onSubmit}  style={{justifyContent:'center',color:'#FFFFFF'}}>
        <div className="mb-3">
          <label className="form-label" htmlFor="name" style={{textAlign:'center',fontSize:'20px',marginTop:'20px'}}>
            Name
          </label>
          <br></br>
          <input className="form-control" type="text" id="name" required />
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="email"  style={{textAlign:'center',fontSize:'20px',marginTop:'20px'}}> Email
          </label>
          <br></br>
          <input className="form-control" type="email" id="email" required />
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="message" style={{textAlign:'center',fontSize:'20px',marginTop:'20px'}}>
            Message
          </label>
          <br></br>
          <textarea className="form-control" id="message" required />
        </div>
        <button className="btn btn-danger" type="submit" style={{background: '#0066A2',color: '#FFFFFF',borderstyle: 'outset',bordercolor: '#0066A2',
	height: '50px',	width: '100px',	font: 'bold15px arial,sans-serif',textshadow: '#ef9937'}}>
          {formStatus}
        </button>
        <br></br>
        <br></br>
      </form>
      </div>
    </div>
    <Cards></Cards>
    <Footer></Footer>
    </div>
  )
}
export default Contact