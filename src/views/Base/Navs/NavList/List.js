import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

export class List extends Component {
    render() {
        return (
            <div>
                <li><NavLink to={this.props.navLink.url} exact activeStyle={{ color: `#f0437e` }}>{this.props.navLink.name}</NavLink></li>
            </div>
        )
    }
}



List.propTypes = {
       navLink : PropTypes.object
}


export default List;

