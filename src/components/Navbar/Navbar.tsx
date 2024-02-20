import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';

const Navbar: React.FC = () => {
  return (
    <nav className={styles.nav}>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/configure_data_load">Configure Data Load</Link>
        </li>
        <li>
          <Link to="/configure_file_load">Configure File Load</Link>
        </li>
        <li>
          <Link to="/configure_load_automation">Load Automation</Link>
        </li>
        <li>
          <Link to="/search">Search</Link>
        </li>
        <li>
          <Link to="/data_view">View Data</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;