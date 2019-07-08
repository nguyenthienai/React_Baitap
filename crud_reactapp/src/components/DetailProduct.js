import React, { Component } from 'react';

class DetailProduct extends Component {

	componentWillReceiveProps(nextProps) {
		console.log("componentWillReceiveProps");
	}
	
	render() {
		return (
			<div>
				<div className="row">
					<div className="col-md-4">
						anh sp
					</div>

					<div className="col-md-8">
						<h3>ten sp</h3>
						<h4>gia sp</h4>
						<h2>mo ta sp</h2>
					</div>
				</div>
			</div>
		);
	}
}

export default DetailProduct