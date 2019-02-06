import React from 'react'

class Login extends React.Component {

    constructor(props) {
        super(props);
        console.log("login constructor", this.props);
        this.state = {
            authenticated: this.props.authenticated,
            username: '',
            password: ''
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

    onSubmit(event) {
        event.preventDefault();
        this.props.login(this.state.username, this.state.password);
        this.props.history.replace('/');
    }

    compo
    render() {
        return (
            <div>
                <form onSubmit={(e) => this.onSubmit(e)}>
                    <label>Username:</label>
                    <input type="text" name="username" onChange={(e) => this.onChange(e)} />
                    <label>Password:</label>
                    <input type="password" name="password" onChange={(e) => this.onChange(e)} />
                    <input type="submit" value="Login" />
                </form>
            </div>
        );
    }
}

export default Login;