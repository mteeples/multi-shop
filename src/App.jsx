import { createBrowserRouter, RouterProvider } from "react-router";

import RootLayout from "./components/Layout/RootLayout";
import HomePage from "./pages/HomePage";
import CategoriesPage from "./pages/CategoriesPage";
import ProductsByCategoryPage from "./pages/ProductsByCategoryPage";
import ProductDetailPage from "./pages/ProductDetailPage";
import ContactPage from "./pages/ContactPage";
import SignUpPage from "./pages/SignUpPage";
import LoginPage from "./pages/LoginPage";
import CartPage from "./pages/CartPage";
import { action as contactAction } from "./components/Contact/ContactForm";
import {
  signupAction,
  loginAction,
  authStatusLoader,
  logoutLoader,
} from "./utils/auth";
import { useProductSync } from "./hooks/useProductSync";
import { useCartSync } from "./hooks/useCartSync";
import { useSelector, useDispatch } from "react-redux";
import { login, logout } from "./store/auth";
import { useAuthSync } from "./hooks/useAuthSync";
import CheckoutPage from "./pages/CheckoutPage";

function App() {
  const dispatch = useDispatch();

  // Move inside the app to  give loaders/actions access to global state
  const router = createBrowserRouter([
    {
      path: "/",
      id: "root",
      loader: authStatusLoader,
      Component: RootLayout,
      hydrateFallbackElement: <p>Loading...</p>,
      errorElement: <p>Page not found</p>,
      children: [
        { index: true, Component: HomePage },
        { path: "contact", Component: ContactPage, action: contactAction },
        {
          path: "signup",
          Component: SignUpPage,
          action: signupAction((data) => dispatch(login(data))),
        },
        {
          path: "login",
          Component: LoginPage,
          action: loginAction((data) => dispatch(login(data))),
        },
        { path: "logout", loader: logoutLoader(() => dispatch(logout())) },
        { path: "categories", Component: CategoriesPage },
        { path: "cart", Component: CartPage },
        { path: "checkout", Component: CheckoutPage },
        {
          path: "products",
          children: [
            {
              path: "category/:categoryName",
              Component: ProductsByCategoryPage,
            },
            { path: ":productId", Component: ProductDetailPage },
          ],
        },
      ],
    },
  ]);

  useProductSync();
  useCartSync();
  useAuthSync();
  return <RouterProvider router={router} />;
}

export default App;
