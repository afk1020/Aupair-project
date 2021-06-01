import React from 'react';
import '../App.css';
import { Button } from './Button';
import './GetStarted.css';
import { MdPlayCircleFilled } from 'react-icons/md';
import Video from './Video'

function GetStarted() {

  const videoplayer = () => {
    <Video />
  }
  return (
    <div className='hero-container'>
      <h1>AU PAIR'd</h1>
      <p>Introducing families to great talent since 1990</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          GET STARTED
        </Button>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={() => videoplayer()}
        >
          WATCH TRAILER <MdPlayCircleFilled className="media"/>
        </Button>
      </div>
    </div>
  );
}

export default GetStarted;