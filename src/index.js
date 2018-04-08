import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';

import { injectGlobal } from 'styled-components';

injectGlobal`
  * { 
    box-sizing: border-box; 
  }
  html,
  body {
    margin: 0;
    padding: 0;
    font-size: 18px;
    font-family: 'Roboto', sans-serif!important;
  }
  .cta { width: 100%; }
`;

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root'),
);
registerServiceWorker();
