import { BrowserRouter, Route, Routes } from "react-router-dom";
import { PageRoutes } from "./lib/constants";
import TestPage from "./pages/test";
import Home from "./pages/home";

export const APP_MENU: MenuItem[] = [
  {
    id: 1,
    label: "Orders",
    icon: <></>,
    route: "/",
  },
  {
    id: 2,
    label: "Invoices",
    icon: <></>,
    route: "/invoices",
  },
  {
    id: 3,
    label: "Members",
    icon: <></>,
    route: "/members",
  },
  {
    id: 4,
    label: "Products",
    icon: <></>,
    route: "/products",
  },
  {
    id: 5,
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
      </Routes>
    </BrowserRouter>
  );
}

export default App;
