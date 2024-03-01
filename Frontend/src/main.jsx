import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Auth0Provider } from '@auth0/auth0-react';


ReactDOM.createRoot(document.getElementById('root')).render(
  
<Auth0Provider
    domain="dev-74p515wxmnsjqguf.us.auth0.com"
    clientId="Xgoe0TbRTLM3k2pTygXtQnN3gfPS2cu5"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <App />
  </Auth0Provider>,  
)
