import React from 'react'

class Login extends React.Component {

    constructor(props) {
        super(props);
        console.log("login constructor", this.props);
        this.state = {
            authenticated: this.props.authenticated,
            username: '',
            password: '',
            errorMsg: ''
        };
    }

    componentWillMount() {
        console.log("login componentWillMount", this.props.authenticated);
        if (this.props.authenticated) {
            this.props.history.replace('/');
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

    isLoginSuccess = (success) => {
        console.log("login callback", success);
        if (success) {
            this.props.history.replace('/');
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

    compo
    render() {
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

export default Login;