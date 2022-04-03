import React from 'react';
import ReactDOM from 'react-dom';
import Router from './routes';
import './index.css';
import { AuthContextProvider } from 'contexts/AuthContext';

ReactDOM.render(
    <React.StrictMode>
        <AuthContextProvider>
            <Router />
        </AuthContextProvider>
    </React.StrictMode>,
    document.getElementById('root')
);