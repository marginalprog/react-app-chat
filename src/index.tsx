import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { ANSWER } from './module'
import 'bootstrap/dist/css/bootstrap.min.css';

import App from './App';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

console.log('Universe anser: ', ANSWER)

root.render(
  <App />
);
