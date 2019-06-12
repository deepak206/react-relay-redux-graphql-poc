import React, { Component } from 'react';
import '../App.css';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import { Link } from 'react-router-dom';

class Header extends Component {


  handleClick(event) {
    event.preventDefault();
    alert('You clicked a breadcrumb.');
  }
  
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
        <Paper elevation={0}>
          <Breadcrumbs aria-label="Breadcrumb">
            <Link color="inherit" to="/" onClick={this.handleClick}>
              Material-UI
            </Link>
            <Typography color="textPrimary">{window.location.pathname.replace("/","")}</Typography>          
          </Breadcrumbs>
        </Paper>
      </div>      
    )
  }
}

export default Header;