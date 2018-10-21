import React from 'react';
import FacebookLogin from 'react-facebook-login';
import formStyles from 'shared/formStyles.scss';

const LoginForm = props => (
    <div className={formStyles.formComponent}>
        <form className={formStyles.form} onSubmit={props.handleSubmit}>
            <input 
                type='text'
                placeholder='Username' 
                className={formStyles.textInput} 
                value={props.usernameValue}
                onChange={props.handleInputChange}
                name='username'
            />
            <input 
                type='password' 
                placeholder='Password' 
                className={formStyles.textInput} 
                value={props.passwordValue}
                onChange={props.handleInputChange}
                name='password'
            />
            <input type='submit' value='Log in' className={formStyles.button}/>
        </form>
        <span className={formStyles.divider}>or</span>
            <FacebookLogin
            appId="157366258545764"
            autoLoad={false}
            fields="name,email,picture"
            callback={props.handleFacebookLogin} 
            cssClass={formStyles.facebookLink} 
            icon='fa-facebook-official'
            />
        <span className={formStyles.forgot_link}>Forgot password?</span>
    </div>
);

export default LoginForm;