


import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter as Router } from 'react-router-dom'
import { AuthProvider } from './Providers/AuthProvider.jsx'
import { PointsProvider } from './Providers/PointsProvider.jsx'




createRoot(document.getElementById('root')).render(

  <Router>
    <AuthProvider>
      <PointsProvider>
        <App />
      </PointsProvider>
    </AuthProvider>
  </Router >




)  
