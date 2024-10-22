import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { Home } from './pages';
import Layout from './layout/Layout';
import Profile from './pages/Profile';
import Post from './pages/Post';
import { useState, useEffect } from 'react';

function App() {
  const [selectedItemName, setSelectedItemName] = useState("Inicio");
  const { pathname } = useLocation();

  useEffect(() => {
    if (pathname === '/home' || pathname === '/') {
      setSelectedItemName("Inicio");
    } else if (pathname.match(/^\/ElonMusk(\/status\/[^/]+)?$/)) {
      setSelectedItemName("Perfil"); // Mantener seleccionado al perfil de Elon Musk
    } else if (pathname.match(/^\/[^/]+(\/status\/[^/]+)?$/)) {
      setSelectedItemName(""); // Para otras rutas de perfil que no son Elon Musk
    }
  }, [pathname]);

  return (
    <Layout selectedItemName={selectedItemName} setSelectedItemName={setSelectedItemName}>
      <Routes>
        <Route path='/home' element={<Home />} />
        <Route path='/' element={<Navigate to="/home" replace />} />
        <Route path='/:name' element={<Profile />} />
        <Route path='/:name/status/:postId' element={<Post />} />
      </Routes>
    </Layout>
  );
}

function AppWrapper() {
  return (
    <Router>
      <App />
    </Router>
  );
}

export default AppWrapper;
