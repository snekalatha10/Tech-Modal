import React from 'react';
import './App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';

const App: React.FC = () => {
    return (
        <div className="app">
            <Header />
            <div className="container">
                <Sidebar />
                <MainContent />
            </div>
        </div>
    );
};

export default App;
