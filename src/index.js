import React from 'react';
import ReactDOM from 'react-dom/client';
// Global CSS (applied to the entire app)
import './index.css';
// Main App component
import App from './App';
// Utility for measuring performance metrics
import reportWebVitals from './reportWebVitals';

/*
  createRoot:
  - Part of the updated React 18 API for rendering components.
  - Ties React's virtual DOM to the actual DOM node with id="root".
*/
const root = ReactDOM.createRoot(document.getElementById('root'));

/*
  StrictMode:
  - Activates additional checks/warnings in development mode.
  - Helps identify potential issues in the application lifecycle.
*/
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

/*
  reportWebVitals:
  - A helper to measure performance metrics like First Contentful Paint (FCP).
  - By default, it does nothing unless you pass a function to log or send these results.
  - You can remove or keep it based on your project's needs.
*/
reportWebVitals();
