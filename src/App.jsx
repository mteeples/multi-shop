import { createBrowserRouter, RouterProvider } from "react-router";

import RootLayout from "./components/Layout/RootLayout";
import HomePage from "./pages/HomePage";
import {
  authStatusLoader,
  logoutLoader,
  loginAction,
  signupAction,
} from "./utils/auth";
import { useProductSync } from "./hooks/useProductSync";
import { useCartSync } from "./hooks/useCartSync";
import { useDispatch } from "react-redux";
import { login, logout } from "./store/auth";
import { useAuthSync } from "./hooks/useAuthSync";

// These pages have weird actions that I couldn't figure out with lazy loading
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";

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
        {
          path: "contact",
          lazy: async () => {
            const actionModule =
              await import("./components/Contact/ContactForm");
            const pageModule = await import("./pages/ContactPage");
            return {
              Component: pageModule.default,
              action: actionModule.action,
            };
          },
        },

        // Because of their tricky actions/loader, I did not lazy load the auth endpoints
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
        {
          path: "logout",
          loader: logoutLoader(() => dispatch(logout())),
        },
        {
          path: "categories",
          lazy: async () => {
            const module = await import("./pages/CategoriesPage");
            return { Component: module.default };
          },
        },
        {
          path: "cart",
          lazy: async () => {
            const module = await import("./pages/CartPage");
            return { Component: module.default };
          },
        },
        {
          path: "checkout",
          lazy: async () => {
            const pageModule = await import("./pages/CheckoutPage");
            const actionModule = await import("./components/Cart/CheckoutForm");
            return {
              Component: pageModule.default,
              action: actionModule.action,
            };
          },
        },
        {
          path: "products",
          children: [
            {
              path: "category/:categoryName",
              lazy: async () => {
                const module = await import("./pages/ProductsByCategoryPage");
                return { Component: module.default };
              },
            },
            {
              path: ":productId",
              lazy: async () => {
                const module = await import("./pages/ProductDetailPage");
                return { Component: module.default };
              },
            },
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
