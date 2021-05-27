import React, {Component} from 'react';
import App from './App';

class Login extends Component {
    state = ({vbl:false})
    handleLogOut = () => {
        let v = this.state.vbl;
        v = !v;
        this.setState({vbl:v});
    }
    render() {
        let output = null;
        if(this.state.vbl===false) {
            output = (
                <div className="position-absolute top-50 start-50 translate-middle border border-4 border-light p-5 shadow text-center">
                    <h1 className="text-success">Hello {this.props.name}</h1>
                    <p className="lead fst-italic">Very important data for our memebers</p>
                    <input 
                        type="button" 
                        value="Logout" 
                        onClick={this.handleLogOut} 
                        className="btn btn-danger mx-auto"  
                    />
                </div>
            )
        }
        else
        {
            output = ( <App /> )
        }
        return(
            <>
                {output}
            </>
        );
    }
}
export default Login;