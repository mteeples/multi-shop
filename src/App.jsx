import { createBrowserRouter, RouterProvider } from "react-router";

import RootLayout from "./components/Layout/RootLayout";
import HomePage from "./pages/HomePage";
import CategoriesPage from "./pages/CategoriesPage";
import ProductsByCategoryPage from "./pages/ProductsByCategoryPage";
import ProductDetailPage from "./pages/ProductDetailPage";
import ContactPage from "./pages/ContactPage";
import SignUpPage from "./pages/SignUpPage";
import LoginPage from "./pages/LoginPage";
import { action as contactAction } from "./components/Contact/ContactForm";
import {
  signupAction,
  loginAction,
  authStatusLoader,
  logoutLoader,
} from "./utils/auth";
import { useProductSync } from "./hooks/useProductSync";

const router = createBrowserRouter([
  {
    path: "/",
    id: "root",
    loader: authStatusLoader,
    Component: RootLayout,
    errorElement: <p>Page not found</p>,
    children: [
      { index: true, Component: HomePage },
      { path: "contact", Component: ContactPage, action: contactAction },
      { path: "signup", Component: SignUpPage, action: signupAction },
      { path: "login", Component: LoginPage, action: loginAction },
      { path: "logout", loader: logoutLoader },
      { path: "categories", Component: CategoriesPage },
      {
        path: "products",
        children: [
          { path: "category/:categoryName", Component: ProductsByCategoryPage },
          { path: ":productId", Component: ProductDetailPage },
        ],
      },
    ],
  },
]);

function App() {
  useProductSync();
  return <RouterProvider router={router} />;
}

export default App;
