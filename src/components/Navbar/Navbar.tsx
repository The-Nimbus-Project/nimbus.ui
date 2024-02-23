import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar: React.FC = () => {
    return (
        <nav className='nav'>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/login">Login</Link>
                </li>
                <li>
                    <Link to="/dataset">Dataset</Link>
                </li>
                <li>
                    <Link to="/file_mapping">File Mapping</Link>
                </li>
                <li>
                    <Link to="/load_automation">Load Automation</Link>
                </li>
                <li>
                    <Link to="/search">Search</Link>
                </li>
                <li>
                    <Link to="/data_view">Data View</Link>
                </li>
                <li>
                    <Link to="/user">User</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;