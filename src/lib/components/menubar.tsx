import { FC, useContext } from "react";
import { AppContext } from "../contexts/app-context";
import { DEFAULT_APP_STATE, PageRoutes } from "../constants";
import useAuthentication from "../hooks/useAuthentication";
import { CartContext } from "../contexts/cart-context";
import { Container, Nav, Navbar } from "react-bootstrap";

interface MenuBarProps {
  menuItems: MenuItem[];
  selectedMenuId: number;
  username: string;
}

const MenuBar: FC<MenuBarProps> = ({ menuItems, selectedMenuId, username }) => {
  const { updateAppState } = useContext(AppContext);
  const { signOutUser, isAdmin } = useAuthentication();

  const { products } = useContext(CartContext);

  const handleSignOutClick = () => {
    signOutUser();
    updateAppState(DEFAULT_APP_STATE);
    window.location.reload();
  };

  return (
    <Navbar
      collapseOnSelect
      expand="sm"
      className="bg-white justify-content-between shadow"
      fixed="top"
    >
      <Container id="basic-navbar-nav-wrapper">
        <Navbar.Brand href={PageRoutes.Home}>
          <img
            src="/assets/images/W4R_Website_Logo-04.jpg"
            className="d-inline-block align-top mt-logo-wish"
            alt="Wholesale4Resale"
          />
        </Navbar.Brand>
        {isAdmin && <p className="text-light">&nbsp;Admin</p>}
        <Navbar.Toggle aria-controls="basic-navbar-nav bar-opener">
          <i className="icon-menu"></i>
        </Navbar.Toggle>
        {menuItems.length > 0 && (
          <Navbar.Collapse
            id="basic-navbar-nav"
            className={`justify-content-end`}
          >
            <Nav className="">
              {(menuItems ?? []).map((item) => (
                <Nav.Link href={item.route}>{item.label}</Nav.Link>
              ))}
              <Nav.Link href={PageRoutes.Cart}>
                <h5 className="position-relative">
                  <i className="icon-handbag"></i>
                  <sub className="badge cart-sub">{products.length}</sub>
                </h5>
              </Nav.Link>
              <Nav.Link
                eventKey={2}
                href={PageRoutes.Login}
                onClick={handleSignOutClick}
              >
                <h5>
                  <span className="icon-power"></span>
                </h5>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        )}
      </Container>
    </Navbar>
    // <header id="mt-header" className="style4 shadow fixed navbar-expand-sm">
    //   <div className="mt-bottom-bar">
    //     <div className="container-fluid">
    //       <div className="row">
    //         <div className="col-xs-12">
    //           <div className="d-in-flex align-items-end w-200">
    //             <Link to={PageRoutes.Home}>
    //               <img
    //                 className="mt-logo-wish"
    //                 src="/assets/images/W4R_Website_Logo-04.jpg"
    //                 alt=""
    //               />
    //             </Link>
    //             {isAdmin && <p className="text-light">&nbsp;Admin</p>}
    //           </div>

    //           {menuItems.length > 0 && (
    //             <ul className="mt-icon-list">
    //               <li className="hidden-lg hidden-md">
    //                 <Link
    //                   to=""
    //                   className="bar-opener navbar-toggler"
    //                   data-bs-toggle="collapse"
    //                   data-bs-target="#navbarSupportedContent"
    //                   aria-controls="navbarSupportedContent"
    //                   aria-expanded="false"
    //                   aria-label="Toggle navigation"
    //                   title="mobile menu"
    //                 >
    //                   <span className="bar"></span>
    //                   <span className="bar small"></span>
    //                   <span className="bar"></span>
    //                 </Link>
    //               </li>
    //               <li className="drop">
    //                 <Link
    //                   to={PageRoutes.Cart}
    //                   className="cart-opener"
    //                   title="Cart"
    //                 >
    //                   <span className="icon-handbag"></span>
    //                   <span className="num">{products.length}</span>
    //                 </Link>
    //               </li>
    //               <li>
    //                 <Link
    //                   to={PageRoutes.Login}
    //                   onClick={handleSignOutClick}
    //                   className="cart-opener"
    //                   title="Log out"
    //                 >
    //                   <span className="icon-power"></span>
    //                 </Link>
    //               </li>
    //             </ul>
    //           )}
    //           <nav
    //             id="navbarSupportedContent"
    //             className="collapse navbar-collapse"
    //           >
    //             <ul className="navbar-nav">
    //               {(menuItems ?? []).map((item) => (
    //                 <li key={item.id} className="nav-item">
    //                   <Link to={item.route} className="nav-link">
    //                     {item.label}{" "}
    //                   </Link>
    //                 </li>
    //               ))}
    //             </ul>
    //           </nav>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    //   <span className="mt-side-over"></span>
    // </header>
  );
};

export default MenuBar;
