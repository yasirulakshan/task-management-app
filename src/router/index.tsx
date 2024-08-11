import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import MainLayout from "../components/layouts/MainLayout";
import { ROUTES } from "../constants/routeConstants";
import Tasks from "../components/pages/Tasks";

const AppRouter: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route path={ROUTES.HOME} element={<h1>Home</h1>} />
          <Route path={ROUTES.TASKS} element={<Tasks />} />
          <Route path={ROUTES.REPORT} element={<h1>REPORT</h1>} />
          <Route path={ROUTES.INSIGHTS} element={<h1>INSINGHTS</h1>} />
          <Route path={ROUTES.INBOX} element={<h1>INBOX</h1>} />
          <Route path={ROUTES.SETTINGS} element={<h1>SETTINGS</h1>} />
          <Route path="*" element={<Navigate to={ROUTES.HOME} />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default AppRouter;
