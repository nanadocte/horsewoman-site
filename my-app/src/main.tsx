import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Home from './pages/Home/Home.tsx'
import Layout from './components/Layout.tsx'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
        <Route index element={<Home/>}/>
        </Route>
      </Routes>
    </Router>
  </StrictMode>
)
