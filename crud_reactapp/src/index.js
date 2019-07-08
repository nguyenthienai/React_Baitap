import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from './components/Header';
import App from './components/App';
import Home from './components/Home';
import About from './components/About';
import Footer from './components/Footer';
import DetailProduct from './components/DetailProduct';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router, Route } from "react-router-dom";

const routing = (
	<Router>
		<div className='container'>
			<Header />
			<Route exact path = "/" component = {Home} />
			<Route path = "/san-pham" component = {DetailProduct} />
            <Route path = "/quan-ly-sp" component = {App} />
            <Route path = "/lien-he" component = {About} />
            <Footer />
		</div>
	</Router>
	);

ReactDOM.render(routing, document.getElementById('root'));

serviceWorker.unregister();
