import React from 'react'
import { Link } from 'react-router';

export default React.createClass({
  render() {
    return (
        <div>
          <ul>
            <li>
              <Link to="/about" activeStyle={{color: 'red'}}>About</Link>
            </li>
            <li>
              <Link to="/repos" activeStyle={{color: 'red'}}>Repos</Link>
            </li>
          </ul>
          {this.props.children}
        </div>
    );
  }
})
