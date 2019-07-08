import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Home from './Home';
import About from './components/About';
import * as serviceWorker from './serviceWorker';
import { Route, BrowserRouter as Router } from 'react-router-dom';

const routing = (
	<Router>
		<div>
			<Route exact path = "/" component = {Home} />
            <Route path = "/quan-ly-sp" component = {App} />
            <Route path = "/lien-he" component = {About} />
		</div>
	</Router>
	)

ReactDOM.render(routing, document.getElementById('root'));

serviceWorker.unregister();
