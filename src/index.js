import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'; // Omita esta linha se você não tiver um arquivo CSS
import App from './App'; // Certifique-se de ter um componente App

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
