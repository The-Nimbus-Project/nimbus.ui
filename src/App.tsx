import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/Home/HomePage';
import LoginPage from './pages/Login/LoginPage';
import SearchPage from './pages/Search/SearchPage';
import DataViewPage from './pages/DataView/DataViewPage';
import LoadAutomationPage from './pages/LoadAutomation/LoadAutomationPage';
import FileMappingPage from './pages/FileMapping/FileMappingPage';
import DatasetPage from './pages/Dataset/DatasetPage';
import UserPage from './pages/User/UserPage';
import Navbar from './components/Navbar/Navbar';
import './App.css';

const App: React.FC = () => {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/search" element={<SearchPage />} />
                <Route path="/data_view" element={<DataViewPage />} />
                <Route path="/load_automation" element={<LoadAutomationPage />} />
                <Route path="/file_mapping" element={<FileMappingPage />} />
                <Route path="/dataset" element={<DatasetPage />} />
                <Route path="/user" element={<UserPage />} />
            </Routes>
        </Router>
    );
};

export default App;
