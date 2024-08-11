import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Home from "../components/pages/Home";
import MainLayout from "../components/layouts/MainLayout";
import { ROUTES } from "../constants/routeConstants";

const AppRouter: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route path={ROUTES.HOME} element={<Home />} />
          <Route path="*" element={<Navigate to={ROUTES.HOME} />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default AppRouter;
