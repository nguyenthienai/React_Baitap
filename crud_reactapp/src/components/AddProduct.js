import React, {Component} from 'react';

class AddProduct extends Component {
    constructor(){
        super()
        this.state = {
           id: '',
           name: '',
           price: 0,
           image: '',
           description: ''
        }
    }

    componentWillReceiveProps(nextProps) {
        if ( nextProps && nextProps.productEdit){
            this.setState({
                id: nextProps.productEdit.id,
                name: nextProps.productEdit.name,
                price: nextProps.productEdit.price,
                image: nextProps.productEdit.image,
                description: nextProps.productEdit.description
            });
        }
    }

    onChange = (event) => {
        var name = event.target.name;
        var value = event.target.value;
        this.setState ({
            [name]: value
        });
    }

    onSubmit = (event) => {
        event.preventDefault();
        this.props.onSubmit(this.state);
        this.onClear();
    }

    onClear = () => {
        this.setState({
            id: '',
            name:'',
            price: 0,
            image: '',
            description:''
        });        
    }

    render(){
        var { id } = this.state;
        return (
            <div className="col-md-3 col-xs-12 col-sm-12">
                <div className="card">
                  <div className="text-center card-header">{ id === '' ? <h4>Thêm Sản Phẩm</h4> : <h4>Sửa Sản Phẩm</h4>}</div>
                    <div className="card-body">
                      <form className="form-inline" onSubmit={this.onSubmit}>
                        <span className="fas fa-archive mb-2"> Tên Sản Phẩm:</span>
                        <div className="input-group mb-2 mr-sm-2">
                            <input 
                                name="name" 
                                type="text" 
                                className="form-control" 
                                placeholder="Tên sản phẩm"
                                value={this.state.name}
                                onChange={this.onChange}
                            />
                        </div>

                        <span className="fas fa-dollar-sign mt-3 mb-2"> Giá:</span>
                        <div className="input-group mb-2 mr-sm-2">
                            <input 
                                name="price" 
                                type="number" 
                                className="form-control" 
                                placeholder="Giá sản phẩm"
                                value={this.state.price}
                                onChange={this.onChange}
                            />
                        </div>

                        <span className="fas fa-images mt-3 mb-2"> Ảnh Sản Phẩm:</span>
                        <div className="input-group mb-2 mr-sm-2">
                            <input 
                                name="image" 
                                type="text" 
                                className="form-control" 
                                placeholder="Link ảnh sản phẩm"
                                value={this.state.image}
                                onChange={this.onChange}
                            />
                        </div>

                        <span className="fas fa-file-alt mt-3"> Mô Tả:</span>
                        <div className="input-group mb-2 mr-sm-2">
                            <textarea 
                                name="description" 
                                type="text"
                                cols="23" 
                                className="form-control" 
                                placeholder="Mô tả sản phẩm"
                                value={this.state.description}
                                onChange={this.onChange}>
                            </textarea>
                        </div>

                        <button 
                            type="submit" 
                            className="btn btn-primary mb-2">
                            <span className="fas fa-plus"> {id === '' ? 'Thêm' : 'Sửa'}</span> 
                        </button>
                        <p 
                            onClick={this.onClear} 
                            className="btn btn-danger mb-2 ml-3">
                            <span className="fas fa-times"> Hủy</span> 
                        </p>
                      </form> 
                  </div>
                </div>
            </div>
       );
}
}
export default AddProduct;
