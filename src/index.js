import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
//import * as serviceWorker from 'serviceWorker';
import registerServiceWorker from 'react-service-worker';
import dotenv from 'dotenv';

import { ApolloProvider } from 'react-apollo';
import ApolloClient from 'apollo-boost';

dotenv.config();

const apollo_client = new ApolloClient({
  uri: process.env.REACT_APP_GCMS_URL
});

ReactDOM.render(
  <React.StrictMode>
  
    <ApolloProvider client={ apollo_client }>
      <App />
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')

);
registerServiceWorker();
//serviceWorker.unregister();