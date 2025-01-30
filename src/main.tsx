// import { HomePage } from '@pages/HomePage';
// import { PlantsPage } from '@pages/PlantsPage';
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
// import { NavBar } from '@molecules/NavBar';
import "./styles/style.css"
// import { PlantPage } from '@pages/PlantPage';
// import { ProfilePage } from '@pages/ProfilePage';
// import { UserPage } from '@pages/UserPage';
import { AppRoutes } from "./routes/AppRoutes"

const queryClient = new QueryClient();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      {/* <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/plants" element={<PlantsPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/settings" element={<p>paramètres de l'app</p>} />
          <Route path="/plant/:id" element={<PlantPage />} />
          <Route path="/user/:id" element={<UserPage />} />
          <Route path="*" element={<p>404 looser</p>} />
        </Routes>
      </Router> */}
      <AppRoutes />
    </QueryClientProvider>
  </StrictMode>,
)
