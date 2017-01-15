import React from 'react'
import { Link } from 'react-router';

export default React.createClass({
  render() {
    return (
        <div>
          <ul>
            <li>
              <Link to="/about" activeClassName="active">About</Link>
            </li>
            <li>
              <Link to="/repos" activeClassName="active">Repos</Link>
            </li>
          </ul>
          {this.props.children}
        </div>
    );
  }
})
