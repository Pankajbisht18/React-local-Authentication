import React , { Component } from 'react';
import App from './App';

class Failed extends Component {
    state = {vbl:false};
    handleClick = () => {
        let v = this.state.vbl;
        v = !v;
        this.setState({vbl:v});
    }
    render() {
        let output = null;
        if(this.state.vbl === false) {
            output = (
                <div className="position-absolute top-50 start-50 translate-middle border border-4 border-light p-5 shadow text-center">
                    <h1 className="text-danger">Login Failed</h1>
                    <p className="lead fst-italic">Authentication failed Try Again......!</p>
                    <input 
                        type="button" 
                        value="Back to login" 
                        onClick={this.handleClick}
                        className="btn btn-danger"
                    />
                </div>
            )
        }
        else {
            output = ( <App /> )
        }
        return(
            <>
                {output}
            </>
        )
    }
}
export default Failed;