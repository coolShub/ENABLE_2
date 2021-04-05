import React from 'react';
import './Cards.css';
import CardItem from './CardItem';
import signLang from './images/signlang.jpg'
import deaf from './images/deaf.jpg'
import blind from './images/blind.jpg'


function Cards() {
  return (
    <div className='cards'>
      <h1>Not disabled,just differently-abled</h1>
      <h3>It doesn't define who you are!!</h3>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          
          <ul className='cards__items'>

            <CardItem
              src={deaf}
              text='Having difficulty in seeing,use our Speech-To-Text Module '
              label='SPEECHT-TO-TEXT'
              path='/services'
            />
            <CardItem
              src={blind}
              text='Having difficulty in listening,use our Text-To-Speech Module'
              label='TEXT-TO-SPEECH'
              path='/products'
            />
            <CardItem
              src={signLang}
              text='Having difficulty in communications,talk via Sign Language'
              label='SIGN-LANGUAGE GENERATOR'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
