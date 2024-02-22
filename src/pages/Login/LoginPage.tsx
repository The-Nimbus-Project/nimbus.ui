import React from 'react';
import styles from './LoginPage.module.css';
import logo from '../../assets/nimbusLogo.png';

const LoginPage: React.FC = () => {
  return (
    <div className={styles.loginContainer}>
        <div className={styles.loginHeader}>
            <img src={logo} alt='Nimbus Logo' className={styles.logo} />
            <h1> Welcome to Nimbus</h1>
            <p>Log in to access the platform</p>
        </div>
        <form className={styles.loginForm}>
            <label htmlFor='email'>Email</label>
            <input type='email' id='email' placeholder='you@example.com' />

            <label htmlFor='password'>Password</label>
            <input type='password' id='password' placeholder='...' />

            <button type='submit' className={styles.loginButton}>Login</button>
        </form>
        <div className={styles.loginFooter}>
            <p>By continuing, you agree to the Terms of Service and Privacy Policy</p>
            {/* <a href="#">Need Help?</a> */}
        </div>
    </div>
  );
};

export default LoginPage;