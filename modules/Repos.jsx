import React, { Component } from 'react';
import { Link } from 'react-router';
import NavLink from './NavLink.jsx';
import { browserHistory } from 'react-router';

export default class Repos extends Component {

    contextTypes: {
        router: React.PropTypes.object
    };

    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        const userName = event.target.elements[0].value;
        const repo = event.target.elements[1].value;
        const path = `/repos/${userName}/${repo}`;
        browserHistory.push(path);
    }

    render() {
        return (
            <div>
                <div>Repos</div>

                <ul>
                    <li>
                        <NavLink to="repos/react-js/react-router">React Router</NavLink>
                    </li>
                    <li>
                        <NavLink to="repos/facebook/react">React</NavLink>
                    </li>
                    <li>
                        <form onSubmit={this.handleSubmit}>
                            <input type="text" placeholder="userName"/>
                            <input type="text" placeholder="repo"/>
                            <button type="submit">Go</button>
                        </form>
                    </li>
                </ul>
                {this.props.children}
            </div>

        );
    }
}