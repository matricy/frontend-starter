import './styles/globals.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router';
import { Routes, Route } from 'react-router'


const rootEl = document.getElementById('root');
if (rootEl) {
  const root = ReactDOM.createRoot(rootEl);
  root.render(
    <React.StrictMode>
      <BrowserRouter>
        <Routes>
          <Route>
            <Route path="/" element={<App />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </React.StrictMode>,
  );
}
