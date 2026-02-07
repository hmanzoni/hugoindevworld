import React from 'react';
import ReactDOM from 'react-dom';
import '../index.css';
import App from './App';
import { createDependencies } from './compositionRoot';

const dependencies = createDependencies();

ReactDOM.render(
  <React.StrictMode>
    <App {...dependencies} />
  </React.StrictMode>,
  document.getElementById('root')
);
