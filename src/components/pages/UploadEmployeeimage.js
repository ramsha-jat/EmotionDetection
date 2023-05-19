import React, {useEffect} from 'react'
import axios from "axios";


function UploadEmployeeimage() {
    const [selectedFile, setSelectedFile] = React.useState(null)
    const [name, setName] = React.useState('')
    const [objects, setObjects] = React.useState([])
    const [objectsLoaded, setObjectsLoaded] = React.useState(false)
    useEffect(() => {
        axios.get('http://localhost:3002/images').then(r => {
            const data = r.data
            for (let i = 0; i < data.length; i++) {
                let image = data[i].image
                // convert to image from buffer
                var uintArray = new Uint8Array(image.data);
                var converted = [];
                uintArray.forEach(function (byte) {
                    converted.push(String.fromCharCode(byte))
                });
                data[i].image = converted.join("")
            }
            console.log(data)
            setObjects(data)
        })
    }, [])

    useEffect(() => {
        if (objects.length > 0) {
            setObjectsLoaded(true)
        }
    }, [objects])
    const fileSelectedHandler = event => {
        console.log(event.target.files[0])
        setSelectedFile(event.target.files[0])
    }
    const [formStatus, setFormStatus] = React.useState('Submit')
    const onSubmit = (e) => {
        e.preventDefault()
        setFormStatus('Submitting...')
        // convert image to base64 string
        const reader = new FileReader();
        reader.readAsDataURL(selectedFile);
        reader.onloadend = () => {
            console.log(reader.result);
            // setSelectedFile()
            let data = {
                name: name,
                image: reader.result
            }
            console.log(data)


            axios.post('http://localhost:3002/images', JSON.stringify(data),
                {
                    headers: {
                        'Content-Type': 'application/json',
                    }
                }).then(r => {
                console.log(r)
                setFormStatus('Submit')
            })
        }


    }
    return (
        <div>
            <h2 style={{textAlign: 'center', margin: '20px', fontSize: '30px', Color: '#FFFFFF'}}>Upload Employee Name
                and Image</h2>

            <form className='bgs' style={{color: '#FFFFFF'}} onSubmit={onSubmit}>
                <label htmlFor="name" style={{fontSize: '20px', margin: '20px'}}>
                    Name
                </label>
                <input type="text" id="name" onChange={(e) => {
                    setName(e.target.value)
                }} required/>
                <br></br>
                <br></br>
                <label htmlFor="image" style={{fontSize: '20px', margin: '20px'}}>
                    Image
                </label>
                <input type="file" id="image" onChange={fileSelectedHandler}/>
                <br></br><br></br>
                <button type="submit" style={{
                    margin: '20px',
                    background: '#0066A2',
                    color: '#FFFFFF',
                    borderstyle: 'outset',
                    bordercolor: '#0066A2',
                    height: '50px',
                    width: '100px',
                    font: 'bold15px arial,sans-serif',
                    textshadow: '#ef9937'
                }}>
                    {formStatus}
                </button>
            </form>

            <div style={{margin: '20px'}}>
                <h2 style={{textAlign: 'center', margin: '20px', fontSize: '30px', Color: '#FFFFFF'}}>Employee
                    Images</h2>
                <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'center'}}>
                    {objectsLoaded && objects.map((object, index) => {
                            return (<div key={index} style={{margin: '20px'}}>
                                    <img src={object.image} alt={`image${index}`}/>
                                    <p style={{textAlign: 'center', fontSize: '20px'}}>{object.name}</p>
                                </div>
                            )
                        }
                    )}
                </div>
            </div>
        </div>
    )
}

export default UploadEmployeeimage