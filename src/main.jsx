import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Portfolio from "./portfolio.mdx";
import Resume from "./resume.mdx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/portfolio",
    element: <Portfolio />,
  },
  {
    path: "/",
    element: <Resume />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
