import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { GoogleOAuthProvider } from "@react-oauth/google"
import { Provider } from 'react-redux'

import store from './redux/store'
import ErrorBoundary from './components/errorboundaries/ErrorBoundary'
ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
  <GoogleOAuthProvider clientId='548912380927-4bnqndmqqdjqa0u0fg8373bthonm1bdb.apps.googleusercontent.com'>
    
    <ErrorBoundary fallback={<p>Something went wrong</p>}>
      <App />
      </ErrorBoundary>
  </GoogleOAuthProvider>
  </Provider>
)