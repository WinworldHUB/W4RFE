import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import { PageRoutes } from "./lib/constants";
import Home from "./pages/home";
import Products from "./pages/products";
import ProductDetail from "./pages/product-detail";
import SignIn from "./pages/signin";
import { useContext } from "react";
import { AppContext } from "./lib/contexts/app-context";
import Orders from "./pages/orders";
import Cart from "./pages/cart";
import SignUp from "./pages/signup";
import UserProfile from "./pages/profile";

export const APP_MENU: MenuItem[] = [
  {
    id: 1,
    label: "Home",
    icon: <></>,
    route: PageRoutes.Home,
  },
  {
    id: 2,
    label: "Products",
    icon: <></>,
    route: PageRoutes.Products,
  },
  {
    id: 3,
    label: "Orders",
    icon: <></>,
    route: PageRoutes.Orders,
  },
  {
    id: 3,
    label: "Profile",
    icon: <></>,
    route: PageRoutes.Profile,
  },
];

function App() {
  const { appState } = useContext(AppContext);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={PageRoutes.SignUp}
          element={<SignUp menuItems={[]} selectedMenuId={1} username="" />}
        />
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
            appState.isUserLoggedIn ? (
              <Products
                menuItems={APP_MENU}
                selectedMenuId={APP_MENU[1].id}
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
          path={PageRoutes.ProductDetail}
          element={
            appState.isUserLoggedIn ? (
              <ProductDetail
                menuItems={APP_MENU}
                selectedMenuId={APP_MENU[1].id}
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
          path={PageRoutes.Orders}
          element={
            appState.isUserLoggedIn ? (
              <Orders
                menuItems={APP_MENU}
                selectedMenuId={APP_MENU[2].id}
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
          path={PageRoutes.Cart}
          element={
            appState.isUserLoggedIn ? (
              <Cart
                menuItems={APP_MENU}
                selectedMenuId={APP_MENU[2].id}
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
          path={PageRoutes.Profile}
          element={
            appState.isUserLoggedIn ? (
              <UserProfile
                menuItems={APP_MENU}
                selectedMenuId={APP_MENU[3].id}
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
      </Routes>
    </BrowserRouter>
  );
}

export default App;
