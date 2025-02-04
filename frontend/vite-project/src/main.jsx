import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

// import App from './App.jsx'
// import Sololeveling from './components/sololeveling.jsx'
// import Homepage from './components/homepage.jsx'
import Igotcheatskill from './components/igotcheatskill.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    {/* <Sololeveling /> */}
    {/* <Homepage /> */}
    <Igotcheatskill/>
  </StrictMode>,
)
