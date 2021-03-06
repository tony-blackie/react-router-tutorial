import React from 'react'
import { render } from 'react-dom'
import {
    Router,
    Route,
    browserHistory,
    IndexRoute
} from 'react-router'
import App from './modules/App.jsx'
import Repos from './modules/Repos.jsx'
import About from './modules/About.jsx'
import Repo from './modules/Repo.jsx'
import Home from './modules/Home.jsx'

render(
    <Router history={browserHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={Home}/>
            <Route path="/repos" component={Repos} />
            <Route path="/repos/:userName/:repoName" component={Repo} />
            <Route path="/about" component={About} />
        </Route>
    </Router>,
    document.getElementById('app'))
