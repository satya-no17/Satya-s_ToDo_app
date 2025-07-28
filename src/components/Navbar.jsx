import React from 'react';
import './Navbar.css';

const Navbar = ({changemode,Mode,OAbout,OHome}) => {
  return (
    <div className={`nav${Mode? " dark":""}`}>
      <div className="title">Satya's ToDo</div>
      <div className="comp">
        <p onClick={OHome}>Home</p>
        <p onClick={OAbout}>About</p>
        <p onClick={changemode}>{Mode?<i className="fa-solid fa-sun"></i>:<i className="fa-solid fa-moon"></i>} Mode</p>
      </div>
    </div>
  );
};

export default Navbar;

