import React from 'react';
import { Link } from 'react-router-dom';

function CardItemImage(props) {
  return (
    <>
      <li className='cards__item'>
        <div className='cards__item__link'>
          <figure className='cards__item-wrap'>
            <img
              className='cards__item__img'
              alt='Employee Image'
              src={props.src}
            />
          </figure>
          <div className='cards__item__info'>
            <h5 className='cards__item_text'>{props.text}</h5>
          </div>
          <div> <button style={{marginLeft:'30px',marginBottom:'20px',marginRight:'10px',padding:'5px'}} onClick={props.handleClick}>Edit Data</button>
                <button style={{marginLeft:'20px',marginBottom:'20px',marginRight:'20px',padding:'5px'}} onClick={props.handleClick}>Remove Employee</button>
        </div>
        </div>
        
      </li>
      
    </>
  );
}

export default CardItemImage;