import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import SearchPage from './pages/SearchPage';
import DataViewPage from './pages/DataViewPage';
import ConfigureLoadAutomationPage from './pages/ConfigureLoadAutomationPage';
import ConfigureFileLoadPage from './pages/ConfigureFileLoadPage';
import ConfigureDataLoadPage from './pages/ConfigureDataLoadPage';
// import logo from './assets/nimbusLogo.png';
import './App.css';
import Navbar from './components/Navbar/Navbar';

const App: React.FC = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/data_view" element={<DataViewPage />} />
        <Route path="/configure_load_automation" element={<ConfigureLoadAutomationPage />} />
        <Route path="/configure_file_load" element={<ConfigureFileLoadPage />} />
        <Route path="/configure_data_load" element={<ConfigureDataLoadPage />} />
      </Routes>
    </Router>
  );
};


// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.tsx</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
