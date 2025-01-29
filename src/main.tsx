import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Router>
      <Routes>
        {/* Route principale */}
        <Route path="/" element={<p>home</p>} />

        {/* Route pour la page de détails d'une plante */}
        <Route path="/plant/:id" element={<p>consulter détails plante</p>} />

        {/* Route pour la page de détails d'une utilisateurs */}
        <Route path="/user/:id" element={<p>consulter détails utilisateur</p>} />

        {/* Route par défaut */}
        <Route path="*" element={<p>home</p>} />
      </Routes>
    </Router>
  </StrictMode>,
)
