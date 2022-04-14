import React from 'react';
import ReactDOM from 'react-dom';
import Router from './routes';
import './index.css';
import { AuthContextProvider } from 'contexts/AuthContext';
import { ZabbixContextProvider } from 'contexts/ZabbixContext';

ReactDOM.render(
    <React.StrictMode>
        <AuthContextProvider>
            <ZabbixContextProvider>
                <Router />
            </ZabbixContextProvider>
        </AuthContextProvider>
    </React.StrictMode>,
    document.getElementById('root')
);