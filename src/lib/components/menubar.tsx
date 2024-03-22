import { FC, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../contexts/appcontext";
import { OrderVM } from "../../vms/order";
import { PageRoutes } from "../constants";

interface MenuBarProps {
  menuItems: MenuItem[];
  selectedMenuId: number;
}

const MenuBar: FC<MenuBarProps> = ({ menuItems, selectedMenuId }) => {
  const { appState } = useContext(AppContext);

  useEffect(() => {
    console.log(appState);
  }, [appState]);

  const order = (appState?.order ?? {}) as OrderVM;
  const totalProducts = order.products === null ? 0 : order.products?.length;

  return (
    <header id="mt-header" className="style4">
      <div className="mt-bottom-bar">
        <div className="container-fluid">
          <div className="row">
            <div className="col-xs-12">
              <div className="mt-logo">
                <Link to={PageRoutes.Home}>
                  <img src="/assets/images/W4R_Website_Logo-04.jpg" alt="" />
                </Link>
              </div>
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
                  <Link to={PageRoutes.Home} className="icon-magnifier"></Link>
                </li>
                <li className="drop">
                  <Link to="" className="cart-opener">
                    <span className="icon-handbag"></span>
                    <span className="num">{totalProducts}</span>
                  </Link>
                </li>
              </ul>
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
