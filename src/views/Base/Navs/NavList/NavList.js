import React, { Component } from 'react';
import PropTypes from 'prop-types';
import List from '../NavList/List';
class NavList extends Component {

  static propTypes = {
    navLinks: PropTypes.array,
  };

  static defaultProps = {
    navLinks: null,
  }

  render() {
    const { navLinks } = this.props;
    let navListTemp;
    if (navLinks) {
      navListTemp = navLinks.map((nav, index)=> {
        return (
          <List navLink={nav} key={index}/>
        );
      });
    }

    return (
      <div>
        {navListTemp}
      </div>
    )
  }
}

export default NavList
