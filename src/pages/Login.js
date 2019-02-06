import React from 'react'

class Login extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: ''
        };
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
        this.props.actions.login(this.state.username, this.state.password);
    }
    render() {
        return (
            <div>
                <form onSubmit={(e)=>this.onSubmit(e)}>
                    <label>Username:</label>
                    <input type="text" name="username" onChange={(e) => this.onChange(e)}/>
                    <label>Password:</label>
                    <input type="password" name="password" onChange={(e) => this.onChange(e)}/>
                    <input type="submit" value="Login"  />
                </form>
            </div>
        );
    }
}

export default Login;