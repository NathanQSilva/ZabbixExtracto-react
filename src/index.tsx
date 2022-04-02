import React from 'react';
import ReactDOM from 'react-dom';
import Router from './routes';
import './index.css';
import { AuthProvider } from 'contexts/AuthContext';

ReactDOM.render(
    <React.StrictMode>
        <AuthProvider>
            <Router />
        </AuthProvider>
    </React.StrictMode>,
    document.getElementById('root')
);