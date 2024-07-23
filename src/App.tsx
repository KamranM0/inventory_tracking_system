import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./pages/AppLayout";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import LandingPage from "./pages/LandingPage";
import WebsiteLayout from "./WebsiteLayout";

function App() {
  const router = createBrowserRouter([
    {
      element: <WebsiteLayout />,
      children: [
        { path: "/", element: <LandingPage /> },
        { path: "/login", element: <LoginPage /> },
        { path: "/register", element: <RegisterPage /> },
        { path: "/app", element: <AppLayout /> },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
