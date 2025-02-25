// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './App';
// import './index.css'
// import { Auth0Provider } from '@auth0/auth0-react';

// const domain = "dev-qianedz4tcxx2hxh.us.auth0.com";
// const clientId = "s9WCbyMM3UTlUvh54nsTQLCN5TpSNxr8";

// ReactDOM.render(
//   <Auth0Provider
//     domain={domain}
//     clientId={clientId}
//     authorizationParams={{ redirect_uri: window.location.origin }}
//   >
//     <App />
//   </Auth0Provider>,
//   document.getElementById('root')
// );





import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { Auth0Provider } from '@auth0/auth0-react';

const domain = "dev-qianedz4tcxx2hxh.us.auth0.com";
const clientId = "s9WCbyMM3UTlUvh54nsTQLCN5TpSNxr8";

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Auth0Provider
    domain={domain}
    clientId={clientId}
    authorizationParams={{ redirect_uri: window.location.origin }}
  >
    <App />
  </Auth0Provider>
);
