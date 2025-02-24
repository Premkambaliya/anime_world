// import { StrictMode } from 'react'
// import React from 'react'
// import { createRoot } from 'react-dom/client'
// import './index.css'

// import App from './App.jsx'
// // import Sololeveling from './components/sololeveling.jsx'
// // import Homepage from './components/homepage.jsx'
// // import Igotcheatskill from './components/igotcheatskill.jsx'
// // import Demonslayer from './components/demonslayer.jsx'
// // import Bluelock from './components/bluelock.jsx'
// // import Viralhit from './components/viralhit.jsx'
// // import Horimiya from './components/horimiya.jsx'
// // import Dayswithmystepsister from './components/dayswith.jsx'
// // import Classroom from './components/classroom.jsx'
// // import Yourname from './components/yourname.jsx'

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <App />
//     {/* <Sololeveling /> */}
//     {/* <Homepage /> */}
//     {/* <Igotcheatskill/> */}
//     {/* <Demonslayer/> */}
//     {/* <Bluelock/> */}
//     {/* <Viralhit/> */}
//     {/* <Horimiya/> */}
//     {/* <Dayswithmystepsister/> */}
//     {/* <Classroom/> */}
//     {/* <Yourname/> */}
//   </StrictMode>,
// )
// import { StrictMode } from 'react'
// import { StrictMode } from 'react'
import './index.css'

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Auth0Provider } from '@auth0/auth0-react';

const domain = "dev-qianedz4tcxx2hxh.us.auth0.com";
const clientId = "s9WCbyMM3UTlUvh54nsTQLCN5TpSNxr8";

ReactDOM.render(
  <Auth0Provider
    domain={domain}
    clientId={clientId}
    authorizationParams={{ redirect_uri: window.location.origin }}
  >
    <App />
  </Auth0Provider>,
  document.getElementById('root')
);
