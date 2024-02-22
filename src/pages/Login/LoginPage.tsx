import React from 'react';
import './LoginPage.css';
import logo from '../../assets/nimbusLogo.png';
import { Icon, Input, Button } from 'semantic-ui-react';

const LoginPage: React.FC = () => {
    return (
      <div className="login-container">
          <div className="login-header">
              <img src={logo} alt='Nimbus Logo' className="login-logo" />
              <h1> Welcome to Nimbus</h1>
              <p>Log in to access the platform</p>
          </div>
          <form className="login-form">
              <div className='login-input-container'>
                <label htmlFor='email'>Email</label>
                <Input iconPosition='left' placeholder='you@example.com'>
                    <Icon name='at' />
                    <input type='email' id='email'/>
                </Input>
              </div>
              <div className='login-input-container'>
                  <label htmlFor='password'>Password</label>
                  <Input iconPosition='left' placeholder='password'>
                      <Icon name='user secret' />
                      <input type='password' id='password'/>
                  </Input>
              </div>
              <div className='login-button-container'>
                  <Button positive>Login</Button>
                  <Button compact>Sign Up</Button>
              </div>
          </form>
          <div className="login-footer">
              <p>By continuing, you agree to the Terms of Service and Privacy Policy</p>
              {/* <a href="#">Need Help?</a> */}
          </div>
      </div>
    );
};

export default LoginPage;