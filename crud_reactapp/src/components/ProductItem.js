import React, {Component} from 'react';

class ProductItem extends Component {

     onUpdate = () => {
        this.props.onUpdate(this.props.product.id);
    }
    
    onDelete = () => {
        this.props.onDelete(this.props.product.id);
    }

    render(){
        var { product, index } = this.props;
        return (
          <tr>
            <th scope="row">{index+1}</th>
            <td>{product.name}</td>
            <td>{product.price}</td>
            <td><img className="imgProducts" src={product.image} alt=''/></td>
            <td style={{width:'30%'}}>{product.description}</td>
            <td>
              <button 
                  type="button" 
                  className="btn btn-success mr-3"
                  onClick={this.onUpdate}
              ><span className="fas fa-edit"> Sửa</span></button>
              <button 
                  type="button" 
                  className="btn btn-danger"
                  onClick= {e => window.confirm("Bạn có chắc chắn rằng muốn xóa sản phẩm này?") &&
                                this.onDelete(e)
                            }
              ><span className="fas fa-trash-alt"> Xóa</span></button>
            </td>
          </tr>      
       );
}
}
export default ProductItem;
