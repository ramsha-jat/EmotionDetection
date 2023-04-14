import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out what's there!!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/office.jpeg'
              text='Monitor workspace '
              label='Adventure'
              path='/services'
            />
            <CardItem
              src='bg.jpg'
              text='Extract and observe emotion'
              label='Mystery'
              path='/products'
            />
            <CardItem
              src='images/ewheel.png'
              text='Predict emotion on the facial data'
              label='Adrenaline'
              path='/sign-up'
            />
             <CardItem
              src='images (1).jpg'
              text='Generate workplace statistics'
              label='census'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;