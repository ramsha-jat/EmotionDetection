import React from 'react';
import axios from "axios";

function CardItemImage(props) {
    const image = props.object.image;
    const id = props.object._id;
    const name = props.object.name;


    const onDelete = (e) => {
        e.preventDefault()
        console.log('delete')
        axios.delete(`http://localhost:3002/image/${id}`).then(r => {
            alert('deleted')
        })
    }
    return (
        <>
            <li className='cards__item'>
                <div className='cards__item__link'>
                    <figure className='cards__item-wrap'>
                        <img
                            className='cards__item__img'
                            // alt='Employee Image'
                            src={image}
                        />
                    </figure>
                    <div className='cards__item__info'>
                        <h5 className='cards__item_text'>{name}</h5>
                    </div>
                    <div>
                        <button style={{marginLeft: '30px', marginBottom: '20px', marginRight: '10px', padding: '5px'}}
                                onClick={() => {
                                    alert('Edit')
                                    window.location.href = '/uploadimage'
                                }}>Edit Data
                        </button>
                        <button style={{marginLeft: '20px', marginBottom: '20px', marginRight: '20px', padding: '5px'}}
                                onClick={onDelete}>Remove Employee
                        </button>
                    </div>
                </div>

            </li>

        </>
    );
}

export default CardItemImage;