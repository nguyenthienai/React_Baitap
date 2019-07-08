import React, { Component } from 'react';
import AllProduct from "./AllProduct";

class Home extends Component {
	constructor(){
		super()
		this.state = {
			products: [],
			showDetail: null
		};
	}

	componentWillMount () {
        if (localStorage && localStorage.getItem('products')){
            var products = JSON.parse(localStorage.getItem('products'));
            this.setState({
                products: products,
            });
          };
    }

    findIndex =(id) => {
        var { products } = this.state;
        var result = -1;
        products.forEach((product, index) => {
            if(product.id === id){
                result = index;
            }
        });
        return result;
    }

	onDetail = (id) => {
		var { products } = this.state;
        var index = this.findIndex(id);
        var showDetail = products[index];
        this.setState({
            showDetail: showDetail
        });
	}

	render() {
		var { products, showDetail } = this.state;
		var allproduct = products.map((product, index) => {
			return <AllProduct 
						key={product.id} 
						product={product}
						onDetail={this.onDetail}
						showDetail={showDetail}
					/>
		})
		return (
			<div className="card mt-5">
			  <div className="card-body">
			  		<div className="row">
			  			{ allproduct }
			  		</div>
			  </div>
			</div>
		);
	}
}

export default Home