import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

class Register extends Component {

    constructor(props){
        super(props);
        this.state = {
            authenticated : props.authenticated,
            username: '',
            password: '',
            email:'',
            errMsg:''
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
        if(this.state.username && this.state.password && this.state.email)
        { 
            var user = {
                name: this.state.username,
                username: this.state.username,
                password: this.state.password,
                email: this.state.email,
                roles:["user"]
            }

            this.props.register(user, this.props.history);
        }
        else{
            this.setState({
                errMsg: "All the fields are mandatory"
            });
        }
    }

    static getDerived

    render() {
        if (this.state.authenticated) {
            return (<Redirect to="/" />);
        }
        else {
            return (
                <div>
                    <h2>Register</h2>
                    <br/>
                    <form onSubmit={(e) => this.onSubmit(e)}>
                        <div className="row">
                            <div className="col-md-1">
                                <label>Username </label>
                            </div>
                            <div className="col-md-1">
                                <input type="text" name="username" onChange={(e) => this.onChange(e)} />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-1">
                                <label>Password </label>
                            </div>
                            <div className="col-md-1">
                                <input type="password" name="password" onChange={(e) => this.onChange(e)} />
                            </div>
                        </div>
                        <br/>
                        <div className="row">
                            <div className="col-md-1">
                                <label>Email </label>
                            </div>
                            <div className="col-md-1">
                                <input type="text" name="email" onChange={(e) => this.onChange(e)} />
                            </div>
                        </div>
                        <br/>
                        <div className="row">
                            <div className="col-md-2">
                                <input type="submit" className="btn btn-primary" value="Register" />
                            </div>
                        </div>
                        <br/>
                        <div className="row">
                            {
                                this.state.errMsg ? (
                                    <div className="alert alert-danger">
                                        {this.state.errorMsg}</div>
                                ) : ''
                            }
                        </div>
                    </form>
                </div>
            );
        }
    }
}

export default Register;