import React, {Component} from 'react';
import {Route} from "react-router-dom";
import Home from './Home';
import About from './About';
import App from '../App';


class RouterURL extends Component {

  render(){
    return (

            <div>
                <Route exact path = "/trang-chu" component = {Home} />
                <Route path = "/quan-ly-sp" component = {App} />
                <Route path = "/lien-he" component = {About} />

            </div>

      );
    }
  }
  export default RouterURL;