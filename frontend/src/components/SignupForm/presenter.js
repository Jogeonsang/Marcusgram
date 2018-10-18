import React from 'react';
import Ionicon from 'react-ionicons';
import formStyles from 'shared/formStyles.scss';

const SignupForm = props => (
    <div className={formStyles.formComponent}>
        <h3 className={formStyles.signupHeader}>Sign up to see photos and videos from your friends.</h3>
        <button className={formStyles.button}>
            <Ionicon icon='logo-facebook' fontSize='20px' color='white' />
            with facebbok
        </button>
        <span className={formStyles.divider}>or</span>
        <form className={formStyles.form} onSubmit={props.handleSubmit}>
            <input 
                type='email' 
                placeholder="Email" 
                className={formStyles.textInput}
                value={props.emailValue}
                onChange={props.handleInputChange}
                name='email'
            />
            <input 
                type='text' 
                placeholder='Full Name' 
                className={formStyles.textInput}
                value={props.nameValue}
                onChange={props.handleInputChange}
                name='name'
            />
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
            <input 
                type='submit' 
                value='Sign up' 
                className={formStyles.button}
            />
        </form>
        <p className={formStyles.terms}>
            By signing up, you agree to our <span>Terms & Privacy Policy</span>.
        </p>
    </div>
)

export default SignupForm