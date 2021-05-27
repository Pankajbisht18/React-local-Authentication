import React, { Component } from 'react';
import Login from './Login';
import Failed from './Failed';

class App extends Component
{
  state = {name:"",password:"",vbl:false,
    Record:[
      {name:"Pankaj", password:"Pankaj123"},
      {name:"Rahul", password:"Rahul123"},
      {name:"Amit", password:"Amit123"},
      {name:"Rohit", password:"Rohit123"},
      {name:"Aman", password:"Aman123"}
  ]}
  handleName = (evt) =>{
    this.setState({name:evt.target.value});
  }
  handlePass = (evt) =>{
    this.setState({password:evt.target.value});
  }
  handleCheck = () =>{
    let uname = this.state.name;
    let pass = this.state.password;
    let userData = this.state.Record;
    let v = this.state.vbl;
    for(let c of userData)
    {
      if(c.name===uname && c.password===pass)
      {
        v = !v;
        this.setState({vbl:v});
        break;
      }
      else
      {
        v = null;
        this.setState({vbl:null})
      }
    }
  }
  render()
  {
    let output = null;
    if(this.state.vbl===false) 
    {
      output = (
        <div className="position-absolute top-50 start-50 translate-middle border border-4 border-light p-5 shadow">
          <h1 className="text-center text-danger">Welcome Guest</h1>
          <p className="lead text-center fst-italic">Login First to explore More</p>
          <label className="text-success fw-bold">Username</label><br />
          <input 
            type="text" 
            name="username" 
            placeholder="Username"
            value={this.state.name} 
            onChange={this.handleName}
            className="form-control"
          /> 
          <br /> 
          <label className="text-success fw-bold">Password</label><br />
          <input 
            type="password" 
            name="password" 
            placeholder="Password"
            value={this.state.password} 
            onChange={this.handlePass}
            className="form-control"
          />
          <br />
          <input 
            type="button" 
            value="Login" 
            onClick={this.handleCheck} 
            className="btn btn-primary"
          />
        </div>
      )
    }
    else if(this.state.vbl===true) {
      output = ( <Login name={this.state.name} /> )
    }
    else if(this.state.vbl===null) {
      output = ( <Failed /> )
    }
    return(
      <>
        {output}
      </>
    );
  }
}
export default App;