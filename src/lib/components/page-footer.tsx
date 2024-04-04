import { FC } from "react";
import { Link } from "react-router-dom";
import { PageRoutes } from "../constants";

const PageFooter: FC = () => {
  return (
    <footer
      id="mt-footer"
      className="style1 wow fadeInUp"
      data-wow-delay="0.4s"
    >
      <div className="footer-holder dark">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-9 mt-paddingbottomsm">
              <div className="f-widget-about">
                <div className="logo">
                  <Link to={PageRoutes.Home}>
                    <img
                      src="/assets/images/W4R_Website_Logo-04-Transparent.png"
                      alt="W4R"
                    />
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-xs-12 col-sm-3 text-right">
              <p>
                ©{" "}
                <Link to={PageRoutes.Home}>
                  <strong>W4R</strong>
                </Link>{" "}
                - All rights Reserved
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-xs-12 text-center">
              Powered by <Link to="https://ennovision.co.uk">@Ennovision</Link>.{" "}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default PageFooter;
