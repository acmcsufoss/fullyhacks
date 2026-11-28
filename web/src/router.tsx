import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { LandingPage } from "./pages/Landing/LandingPage";
import { PortalPage } from "./pages/Portal/PortalPage";
import { AdminPage } from "./pages/Admin/AdminPage";
import { ApplyPage } from "./pages/Apply/ApplyPage";
import { ApplicationPage } from "./pages/Application/ApplicationPage";
import { ErrorPage } from "./pages/Error/ErrorPage";
import { InterestForm } from "./pages/InterestForm/InterestForm";

const isDevSite = window.location.hostname === "dev.fullyhacks.com";

const router = createBrowserRouter([
  {
    path: "*",
    element: isDevSite
      ? <LandingPage />
      : <InterestForm />,
    errorElement: <ErrorPage />
  },

  ...(isDevSite
    ? [
        { path: "/profile", element: <PortalPage /> },
        { path: "/admin", element: <AdminPage /> },
        { path: "/apply", element: <ApplyPage /> },
        { path: "/application", element: <ApplicationPage /> },
      ]
    : []),

  { path: "*", element: <ErrorPage /> },
]);

export function AppRouter() {
  return <RouterProvider router={router} />;
}
