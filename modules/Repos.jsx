import React, { Component } from 'react';
import { Link } from 'react-router';

export default class Repos extends Component {
    render() {
        return (
            <div>
                <div>Repos</div>

                <ul>
                    <li>
                        <Link to="repos/react-js/react-router">React Router</Link>
                    </li>
                    <li>
                        <Link to="repos/facebook/react">React</Link>
                    </li>
                </ul>
            </div>

        );
    }
}