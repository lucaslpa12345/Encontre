import React from 'react';
import ReactDOM from 'react-dom';
import './presentation/components/global.css';
import Routes from './presentation/Routes/routes';
ReactDOM.render(
    <React.StrictMode>
      <Routes/>
    </React.StrictMode>,
    document.getElementById('root'),
);

