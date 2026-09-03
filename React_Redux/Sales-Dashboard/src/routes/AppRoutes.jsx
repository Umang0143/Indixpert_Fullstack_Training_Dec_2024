import { createBrowserRouter, Navigate } from "react-router-dom";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import Dashboard from "../pages/Dashboard";
import RootLayout from "../layouts/RootLayout";
import ProtectedRoute from "../routes/ProtectedRoute";
import Overview from "../pages/Overview";
import ComingSoon from "../pages/ComingSoon";
import NotFound from "../pages/NotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <Login /> },
      { path: "signup", element: <SignUp /> },

      {
        path: "dashboard",
        element: (
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        ),
        children: [
          { index: true, element: <Navigate to="overview" replace /> },
          { path: "overview", element: <Overview /> },
          { path: "comingSoon", element: <ComingSoon /> },
        ],
      },

      { path: "*", element: <NotFound /> },
    ],
  },
]);

export default router;
