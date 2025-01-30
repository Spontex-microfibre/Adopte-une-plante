import { Routes, Route } from "react-router-dom";
import { PlantsPage } from "@pages/PlantsPage";
import { PlantDetailsPage } from "@pages/PlantDetailsPage";
import { FavoritesPage } from "@pages/FavoritesPage";

export const PlantsRoutes: React.FC = () => {
  return (
    <Routes>
      <Route index element={<PlantsPage />} />
      <Route path=":id" element={<PlantDetailsPage />} />
      {/* <Route path="create" element={<p>PlantForm</p>} /> */}
      <Route path="edit/:id" element={<p>PlantForm</p>} />
      <Route path="favorites" element={<FavoritesPage />} />
    </Routes>
  );
}