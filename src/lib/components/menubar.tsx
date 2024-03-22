import { FC, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../contexts/app-context";
import { OrderVM } from "../../vms/order";
import { DEFAULT_APP_STATE, PageRoutes } from "../constants";
import useAuthentication from "../hooks/useAuthentication";
import { CartContext } from "../contexts/cart-context";

interface MenuBarProps {
  menuItems: MenuItem[];
  selectedMenuId: number;
  username: string;
}

const MenuBar: FC<MenuBarProps> = ({ menuItems, selectedMenuId, username }) => {
  const { updateAppState } = useContext(AppContext);
  const { signOutUser } = useAuthentication();

  const { products } = useContext(CartContext);

  const handleSignOutClick = () => {
    signOutUser();
    updateAppState(DEFAULT_APP_STATE);
    window.location.reload();
  };

  return (
    <header id="mt-header" className="style4 shadow fixed">
      <div className="mt-bottom-bar">
        <div className="container-fluid">
          <div className="row">
            <div className="col-xs-12">
              <div className="mt-logo">
                <Link to={PageRoutes.Home}>
                  <img src="/assets/images/W4R_Website_Logo-04.jpg" alt="" />
                </Link>
              </div>

              {menuItems.length > 0 && (
                <ul className="mt-icon-list">
                  <li className="hidden-lg hidden-md">
                    <a
                      href="/"
                      className="bar-opener mobile-toggle"
                      title="mobile menu"
                    >
                      <span className="bar"></span>
                      <span className="bar small"></span>
                      <span className="bar"></span>
                    </a>
                  </li>
                  <li>
                    <Link
                      to={PageRoutes.Home}
                      className="icon-magnifier"
                      title="Search"
                    ></Link>
                  </li>
                  <li className="drop">
                    <Link to="" className="cart-opener" title="Cart">
                      <span className="icon-handbag"></span>
                      <span className="num">{products.length}</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={PageRoutes.Login}
                      onClick={handleSignOutClick}
                      className="cart-opener"
                      title="Log out"
                    >
                      <span className="icon-power"></span>
                    </Link>
                  </li>
                </ul>
              )}
              <nav id="nav">
                <ul>
                  {(menuItems ?? []).map((item) => (
                    <li key={item.id}>
                      <Link to={item.route}>{item.label} </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
      <span className="mt-side-over"></span>
    </header>
  );
};

export default MenuBar;
