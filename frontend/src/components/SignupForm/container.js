import React, { Component } from 'react';
import SignupForm from './presenter';

class Container extends Component {
    state = {
        email: '',
        name: '',
        username: '',
        password: '',
    };
    render() {
        const { email, name, username, password } = this.state;
        return (
           <SignupForm 
            emailValue={email}
            nameValue={name}
            usernameValue={username} 
            passwordValue={password} 
            handleFacebookLogin={this._handleFacebookLogin}
            handleInputChange={this._handleInputChange}
            handleSubmit={this._handleSubmit}
            />
        );
    }
    _handleInputChange = event => {
        const { target : { value, name } } = event;
        this.setState({
            [name]: value
        })
    };
    _handleSubmit = event => {
        const { email, name, username, password } = this.state;
        const { createAccount } = this.props;
        event.preventDefault();
        createAccount(username, password, email, name)
    };
    _handleFacebookLogin = response => {
        const { facebookLogin } = this.props;
        facebookLogin(response.accessToken);
    }
}

export default Container;