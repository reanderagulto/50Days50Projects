import React from 'react'; 
import TextInput from '../components/TextInput';
import ButtonComponent from '../components/ButtonComponent';

const LoginForm = () => {
  return (
    <div className='login-form'>
        <h1>Please Login</h1>
        <div className="login-form__container">
            <TextInput 
                type="text"
                name="email"
                id="email"
                label="Email"
            />
            <TextInput 
                type="password"
                name="password"
                id="password"
                label="Password"
            />
            <ButtonComponent 
                id="submit"
                label="Login"
            />
        </div>
        <div className="login-form__footer">
            <p>
                Don't have an account? <a href="#" className="link">Register</a>
            </p>
        </div>
    </div>
  )
}

export default LoginForm
