import React, {Component} from 'react';
import ProductItem from './ProductItem';

class ListProduct extends Component {

    render(){
        var { products } = this.props;
        var elmProducts = products.map((product, index) => {
            return <ProductItem 
                        key={product.id} 
                        index={index} 
                        product={product}
                        onDelete={this.props.onDelete}
                        onUpdate={this.props.onUpdate}  
                    />
        });

        var { alert } = this.props;
        return (
          <div className="col-md-9">
              <div className="card">
                <div className="text-center card-header"><h4>Danh Sách Sản phẩm</h4></div>
                <div><h5 className="alert alert-warning mb-0 mt-1" role="alert">{alert}</h5></div>
                  <div className="card-body">
                    <div className="table-responsive table-responsive-sm table-responsive-xs table-responsive-md table-responsive-lg table-responsive-xl">
                      <table className="table table-bordered table-borderless table-sm table-hover">
                        <thead className="thead-dark|thead-light">
                          <tr>
                            <th scope="col">STT</th>
                            <th scope="col">Tên Sản Phẩm</th>
                            <th scope="col">Giá</th>
                            <th scope="col">Ảnh Sản Phẩm</th>
                            <th scope="col">Mô Tả</th>
                            <th scope="col">Hành Động</th>
                          </tr>
                        </thead>
                        <tbody>
                            {elmProducts}
                        </tbody>
                      </table>
                  </div>
                </div>
              </div>
          </div>
       );
}
}
export default ListProduct;
