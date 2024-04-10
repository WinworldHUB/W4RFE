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
        <Nav.Link href={PageRoutes.Cart} className="d-xs-block d-sm-none">
          <h5 className="position-relative">
            <i className="icon-handbag"></i>
            {products.length > 0 && (
              <sub className="badge cart-sub">{products.length}</sub>
            )}
          </h5>
        </Nav.Link>
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
              <Nav.Link href={PageRoutes.Cart} className="d-sm-block d-none">
                <h5 className="position-relative">
                  <i className="icon-handbag"></i>
                  {products.length > 0 && (
                    <sub className="badge cart-sub">{products.length}</sub>
                  )}
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
  );
};

export default MenuBar;
