import React, { Component } from 'react';
import '../App.css';
import { Link } from 'react-router-dom';

class Header extends Component {

  render() {
    return (
      <div>
          <h2>React Relay Redux POC</h2>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <ul className="navbar-nav mr-auto">
            <li><Link to={'/'} className="nav-link"> Home </Link></li>
            <li><Link to={'/CreatePage'} className="nav-link">Add Page</Link></li>            
            <li><Link to={'/ListPage'} className="nav-link">List All Page</Link></li>
          </ul>
        </nav>
          <hr />
      </div>
      
    )
  }
}

export default Header;