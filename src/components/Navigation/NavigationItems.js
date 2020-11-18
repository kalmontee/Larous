import React from 'react';

import NavigationItem from './NavigationItem/NavigationItem';
import classes from './NavigationItems.module.css';

const NavBar = (props) => {
  return (
    <nav className={classes.Navbar}>
      <div>
        <h2>Punk <span>Beer</span></h2>
      </div>
      <ul>
        <NavigationItem link="/">Home</NavigationItem>
        <NavigationItem link="/favorites">Favorites</NavigationItem>
      </ul>
    </nav>
  )
}

export default NavBar;