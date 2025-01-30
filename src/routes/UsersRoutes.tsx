import { Routes, Route } from "react-router-dom";
import { UserDetailsPage } from "@pages/UserDetailsPage";

export const UsersRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path=":id" element={<UserDetailsPage />} />
    </Routes>
  );
}