import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { UsersRoutes } from "./UsersRoutes"
import { PlantsRoutes } from "./PlantsRoutes"
import { HomePage } from "@pages/HomePage";
import { NavBar } from "@organisms/NavBar";

export const AppRoutes = () => {
    return (
        <Router>
            <NavBar />
            <Routes>
                <Route path="/Adopte-une-plante/" element={<HomePage />} />
                <Route path="/Adopte-une-plante/users/*" element={<UsersRoutes />} />
                <Route path="/Adopte-une-plante/plants/*" element={<PlantsRoutes />} />
            </Routes>
        </Router>
    );
}