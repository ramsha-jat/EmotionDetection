import React from 'react'



function UploadEmployeeimage() {
   const fileSelectedHandler = event =>{
        console.log(event.target.files[0])
    }
    const [formStatus, setFormStatus] = React.useState('Submit')
    const onSubmit = (e) => {
      e.preventDefault()
      setFormStatus('Submitting...')
      const { name, image } = e.target.elements
      let conFom = {
        name: name.value,
        image: image.value,
      }
      console.log(conFom)
    }
  return (
    <div >
        <h2  style={{textAlign:'center',margin:'20px',fontSize:'30px',Color:'#FFFFFF'}}>Upload Employee Name and Image</h2>
       
        <form  className='bgs' style={{color:'#FFFFFF'}}>
          <label  htmlFor="name" style={{fontSize:'20px',margin:'20px'}}>
            Name
          </label>
          <input  type="text" id="name" required />
          <br></br>
          <br></br>
          <label htmlFor="image" style={{fontSize:'20px',margin:'20px'}}>
          Image 
          </label>
          <input  type="file" id="image" onChange={fileSelectedHandler}/>
          <br></br><br></br>
        <button  type="submit" style={{margin:'20px',background: '#0066A2',color: '#FFFFFF',borderstyle: 'outset',bordercolor: '#0066A2',
	height: '50px',	width: '100px',	font: 'bold15px arial,sans-serif',textshadow: '#ef9937'}}>
          {formStatus}
        </button>
        </form>
        </div>
  )
}

export default UploadEmployeeimage