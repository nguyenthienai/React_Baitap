import React, {Component} from 'react';
import axios from 'axios';

class  App extends Component {
    constructor(){
        super()
        this.state = {
            email: '',
            pass: '',
            acc: []
        }
    }

    onChange = (event) => {
        var target = event.target;
        var name = target.name;
        var value = target.value;
        this.setState({
            [name] : value
        });
    }

    componentDidMount() {
    axios({
        method: 'GET',
        url: 'http://localhost:8000/api/user',
        data: null
    }).then(res => {
        console.log(res);
    }).catch(err => {
        console.log(err);
    });
}

    onSubmit = (event) => {
        event.preventDefault();
    }

    render() {
        return (
    <div className="container">
    <form onSubmit={this.onSubmit}>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input 
              type="email" 
              className="form-control" 
              placeholder="Enter email"
              name="email"
              value={this.state.email}
              onChange={this.onChange}
          />
          
        </div>

        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Password</label>
          <input 
              type="password" 
              className="form-control" 
              placeholder="Password"
              name="pass"
              value={this.state.pass}
              onChange={this.onChange}
          />
        </div>
       
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
    }

}

export default App;

