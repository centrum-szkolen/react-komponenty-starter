import React from 'react';
// Pakiet ReactDOM udostępnia metody specyficzne dla DOM, które mogą być używane na najwyższym 
// poziomie aplikacji i, w razie potrzeby, jako “wyjście awaryjne” poza model Reacta.
// https://pl.reactjs.org/docs/react-dom.html
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
