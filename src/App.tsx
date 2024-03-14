import { BrowserRouter, Route, Routes } from "react-router-dom";
import { PageRoutes } from "./lib/constants";
import TestPage from "./pages/test";
import Home from "./pages/home";
import Products from "./pages/products";

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
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={PageRoutes.Login}
          element={
            <Home menuItems={APP_MENU} selectedMenuId={APP_MENU[0].id} />
          }
        />
        <Route
          path={PageRoutes.Products}
          element={
            <Products menuItems={APP_MENU} selectedMenuId={APP_MENU[1].id} />
          }
        />
        <Route
          path={PageRoutes.Test}
          element={
            <TestPage menuItems={APP_MENU} selectedMenuId={APP_MENU[2].id} />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
