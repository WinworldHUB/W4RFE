import { BrowserRouter, Route, Routes } from "react-router-dom";
import { PageRoutes } from "./lib/constants";
import TestPage from "./pages/test";
import Home from "./pages/home";
import Products from "./pages/products";
import ProductDetail from "./pages/product-detail";
import SignIn from "./pages/signin";
import { useContext } from "react";
import { AppContext } from "./lib/contexts/appcontext";

export const APP_MENU: MenuItem[] = [
  {
    id: 1,
    label: "Home",
    icon: <></>,
    route: "/",
  },
  {
    id: 2,
    label: "Products",
    icon: <></>,
    route: "/products",
  },
  {
    id: 3,
    label: "Test",
    icon: <></>,
    route: "/test",
  },
];

function App() {
  const { appState } = useContext(AppContext);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={PageRoutes.Login}
          element={
            appState.isUserLoggedIn ? (
              <Home
                menuItems={APP_MENU}
                selectedMenuId={APP_MENU[0].id}
                username={appState.username}
              />
            ) : (
              <SignIn
                menuItems={[]}
                selectedMenuId={APP_MENU[0].id}
                username={appState.username}
              />
            )
          }
        />
        <Route
          path={PageRoutes.Products}
          element={
            <Products
              menuItems={APP_MENU}
              selectedMenuId={APP_MENU[1].id}
              username={appState.username}
            />
          }
        />
        <Route
          path={PageRoutes.ProductDetail}
          element={
            <ProductDetail
              menuItems={APP_MENU}
              selectedMenuId={APP_MENU[1].id}
              username={appState.username}
            />
          }
        />
        <Route
          path={PageRoutes.Test}
          element={
            <TestPage
              menuItems={APP_MENU}
              selectedMenuId={APP_MENU[2].id}
              username={appState.username}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
