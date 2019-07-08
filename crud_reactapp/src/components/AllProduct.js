import React, { Component } from 'react';
import { NavLink } from "react-router-dom";

 class AllProduct extends Component {

 	onDetail = () => {
 		this.props.onDetail(this.props.product.id);
 	}

	render() {
		var { product, showDetail } = this.props;
		console.log(showDetail);
		return (
			<div className="col-md-3 col-sm-6 col-xs-6 col-lg-3">					
				<div className="card w-100 mb-3">
					<NavLink to="/san-pham">
						<img 
							onClick={this.onDetail}
							src={product.image} className="card-img-top zoom"  alt={product.name} 
						/>
					</NavLink>
					<div className="card-body">
						<h5 className="card-title text-center">{product.name}</h5>
						<h5 className="price text-center text-danger">{product.price} VNĐ</h5>
						<NavLink 
							to="" 
							className="form-control btn btn-success">
							<p><span className="fas fa-shopping-cart"></span> Thêm vào giỏ</p>
						</NavLink>
					</div>						
				</div>		
			</div>
		);
	}
}

export default AllProduct