import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import redux from './redux'
import { Provider } from 'react-redux'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={redux}>
    <App />
  </Provider>
);