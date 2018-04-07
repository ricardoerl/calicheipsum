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
    font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif;
  }
  .text-center { text-align: center; }
`;

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root'),
);
registerServiceWorker();
