import React from 'react'
import { Redirect } from 'react-router-dom';

class Login extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            authenticated: props.authenticated,
            fromLocation: props.location.state ? props.location.state.from : '',
            username: '',
            password: '',
            errorMsg: ''
        };
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        if (nextProps.authenticated !== prevState.authenticated) {
            return { authenticated: nextProps.authenticated };
        }
        else {
            return null;
        }
    }

    onChange(event) {
        const target = event.target;
        const name = target.name;
        this.setState(
            {
                [name]: event.target.value
            }
        );
    }

    isLoginSuccess = (success, dispatch) => {
        if (success) {
            if (this.state.fromLocation) {
                this.props.history.replace(this.state.fromLocation.pathname);
            }
            else {
                this.props.history.replace('/');
            }
        }
        else {
            this.setState({
                errorMsg: "Username and password combination is wrong"
            });
        }
    }

    onSubmit(event) {
        event.preventDefault();
        this.props.login(this.state.username, this.state.password, this.isLoginSuccess);
    }

    render() {
        if (this.state.authenticated) {
            return (<Redirect to="/" />);
        }
        else {
            return (
                <div>
                    <h2>Login</h2>
                    <form onSubmit={(e) => this.onSubmit(e)}>
                        <div className="form-group">
                            <label>Username </label>
                            <input type="text" name="username" onChange={(e) => this.onChange(e)} />
                        </div>
                        <div className="form-group">
                            <label>Password </label>
                            <input type="password" name="password" onChange={(e) => this.onChange(e)} />
                        </div>
                        <div className="form-group">
                            <input type="submit" value="Login" />
                        </div>
                        <label>{this.state.errorMsg}</label>
                    </form>
                </div>
            );
        }
    }
}

export default Login;