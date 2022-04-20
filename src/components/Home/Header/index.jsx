import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

const Header = () => (
  <header className='home-header'>
    <h2>Sourav singh</h2>
    <h1>
      <span>“</span> Bloging website <span>”</span>
    </h1>
    <p>
    “Keep your face always toward the sunshine, and shadows will fall behind you.”
    </p>
    <div class="blink_me">To write your article click below button</div>
    <Link to={"/editor"}> <button type="button" class="btn btn-danger">Write it!!</button></Link>
  </header>
);

export default Header;
