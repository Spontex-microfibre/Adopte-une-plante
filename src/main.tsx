import { Home } from '@pages/Home';
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { NavBar } from '@molecules/NavBar';

const queryClient = new QueryClient();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <Router>
        <NavBar />
        <Routes>
          {/* Route principale */}
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<p>consulter mon profil</p>} />
          <Route path="/settings" element={<p>paramètres de l'app</p>} />

          {/* Route pour la page de détails d'une plante */}
          <Route path="/plant/:id" element={<p>consulter détails plante</p>} />

          {/* Route pour la page de détails d'une utilisateurs */}
          <Route path="/user/:id" element={<p>consulter détails utilisateur</p>} />

          {/* Route par défaut */}
          <Route path="*" element={<p>home</p>} />
        </Routes>
      </Router>
    </QueryClientProvider>
  </StrictMode>,
)
