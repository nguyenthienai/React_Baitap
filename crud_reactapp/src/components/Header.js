import React, { Component } from 'react';
import Menu from './Menu';
import { NavLink } from "react-router-dom";

class Header extends Component {
	render() {
		return (
			<div>
				<div className="row myheader">
					<div className="col-md-6 col-xs-12 col-sm-12">
						<NavLink to="/"><img src= "image/logo.png" alt = "" /></NavLink>
					</div>

					<div className="col-md-6 col-xs-12 col-sm-12">
					  	<div className="input-group search">
					        <input 
						        type="text" 
						        className="form-control" 
						        placeholder="Nhập từ khóa tìm kiếm" 
						        aria-describedby="button-addon2" 
					        />
					        <div className="input-group-append">
					          <button className="btn btn-outline-secondary mybtn" type="button" id="button-addon2"><span className="fas fa-search"> </span></button>
					        </div>
	      				</div>
					</div>
				</div>
				<Menu />
			</div>
		);
	}
}

export default Header