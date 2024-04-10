import { FC } from "react";
import { Link } from "react-router-dom";
import { PageRoutes } from "../constants";
import { Col, Row } from "react-bootstrap";

const PageFooter: FC = () => {
  return (
    <footer
      id="mt-footer"
      className="style1 wow fadeInUp bg-light"
      data-wow-delay="0.4s"
    >
      <div className="footer-holder">
        <div className="container">
          <Row>
            <Col xs="12">
              <div className="d-flex justify-content-between align-items-center">
                <div className="logo">
                  <Link to={PageRoutes.Home}>
                    <img
                      src="/assets/images/W4R_Website_Logo-04-Transparent.png"
                      alt="W4R"
                    />
                  </Link>
                </div>
                <p className="logo w-50 text-end">
                  ©{" "}
                  <Link to={PageRoutes.Home}>
                    <strong>W4R</strong>
                  </Link>{" "}
                  - All rights Reserved
                </p>
              </div>
            </Col>
            <Col xs="12" className="text-center">
              Powered by <Link to="https://ennovision.co.uk">@Ennovision</Link>.{" "}
            </Col>
          </Row>
        </div>
      </div>
    </footer>
  );
};

export default PageFooter;
