import React, {Component} from 'react';
import './App.css';
import AddProduct from './components/AddProduct';
import ListProduct from './components/ListProduct';
import Menu from './components/Menu';

class App extends Component {
         constructor(){
        super()
        this.state = {
           products: [],
           productEdit: null,
           alert: ''
        };
    }

    componentWillMount () {
        if (localStorage && localStorage.getItem('products')){
            var products = JSON.parse(localStorage.getItem('products'));
            this.setState({
                products: products
            });
          };
    }

    checkImage = (image, para, le) => {
      var imgFile = ['.jpg', '.png', '.bmp', '.svg', 'jpeg' ];
      var img = image.slice(para,le).toLowerCase();
      return imgFile.indexOf(img);
    }

    onSubmit = (data) => {
       var { products } = this.state;
       var isImage = this.checkImage(data.image,-4, data.image.length);
       console.log(data);
       if ((data.name).trim() === ''){
          this.setState({
            alert: '* Vui lòng nhập tên sản phẩm! *'
          });
        } else {
            if (data.name.length < 2){
            this.setState({
              alert: '* Tên sản phẩm phải có 2 ký tự trở lên! *'
            })
          } else {
            if (data.price <= 0){
              this.setState({
                alert: '* Vui lòng nhập giá sản phẩm lớn hơn 0! *'
              })
            } else {
                if ((data.image).trim() === ''){
                    this.setState({
                        alert: '* Vui lòng nhập ảnh sản phẩm! *'
                    })
                } else {
                    if (isImage === -1){
                        this.setState({
                        alert: '* Vui lòng chọn đúng định dạng file ảnh! *'
                          })
                          } else {
                              if (data.id === ''){
                                  data.id = this.genID();
                                  products.push(data);
                                  this.setState({
                                    products: products,
                                    productEdit: null,
                                    alert: '* Thêm mới sản phẩm thành công! *'
                               });
                             } else {
                                  var index = this.findIndex(data.id);
                                  products[index] = data;
                                  this.setState({
                                    products: products,
                                    productEdit: null,
                                    alert: '* Chỉnh sửa sản phẩm thành công! *'
                               });
                               }
                      }
                }      
        localStorage.setItem('products', JSON.stringify(products));
            }
         }
        }
    }

    s4(){
        return Math.floor((1+Math.random())*0x10000).toString(16).substring(1);
    }

    genID(){
        return this.s4() + this.s4() +'-' + this.s4() + '-' + this.s4() + this.s4() + '-' + this.s4()+
                this.s4()+ '_' + this.s4();
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

    onDelete =(id) => {
        var { products } = this.state;
        var index = this.findIndex(id);
        if (index !== -1){
            products.splice(index, 1);
            this.setState({
                products: products,
                alert: '* Xóa sản phẩm thành công! *'
            });
        localStorage.setItem('products', JSON.stringify(products));
        }
    }

    onClear = () => {
        this.setState({
            name:'',
            price: 0,
            description:''
        });
    }

    onUpdate = (id) => {
        var { products } = this.state;
        var index = this.findIndex(id);
        var productEdit = products[index];
        this.setState({
            productEdit: productEdit,
            alert: ''
        });
        this.onClear();
    }
    
    render(){
        var { products, productEdit, alert } = this.state;
        return (          
           <div className="container">
               
               <div className="text-center card-header mt-3 mb-3">
                    <h1>Quản Lý Sản Phẩm</h1>
               </div>
               <div className="row">
                 <AddProduct onSubmit={this.onSubmit} productEdit={productEdit} />
                 <ListProduct 
                     alert={alert} 
                     products={products} 
                     onDelete={this.onDelete} 
                     onUpdate={this.onUpdate} 
                 />
               </div>
               <div class="card-footer text-muted mt-3">
                <span className="fas fa-registered"> Nguyễn Thiên Ái</span>
              </div>
           </div> 
       );
    }
}

export default App;
