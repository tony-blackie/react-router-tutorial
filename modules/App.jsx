import React from 'react'
import { Link } from 'react-router';
import NavLink from './NavLink.jsx';

export default React.createClass({
  render() {
    return (
        <div>
          <ul>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
            <li>
              <NavLink to="/repos">Repos</NavLink>
            </li>
          </ul>
          {this.props.children}
        </div>
    );
  }
})
