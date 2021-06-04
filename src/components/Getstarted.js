import React from 'react';
import '../App.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';
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
      <Link to='/create-listing'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          GET STARTED
        </Button>
        </Link>
        <Link to='/video'>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={() => videoplayer()}
        >
          WATCH TRAILER <MdPlayCircleFilled className="media"/>
        </Button>
        </Link>
      </div>
    </div>
  );
}

export default GetStarted;