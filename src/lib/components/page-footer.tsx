import { FC } from "react";

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
            <div className="col-xs-12 col-sm-6 col-md-3 mt-paddingbottomsm">
              <div className="f-widget-about">
                <div className="logo">
                  <a href="#">
                    <img
                      src="/assets/images/W4R_Website_Logo-04-Transparent.png"
                      alt="Schon"
                    />
                  </a>
                </div>
                <p>
                  Exercitation ullamco laboris nisi ut aliquip ex commodo
                  consequat. Duis aute irure dolor in reprehenderit in voluptate
                  velit esse cillum dolore eu fugiat nulla pariatur.
                </p>
                <ul className="list-unstyled social-network">
                  <li>
                    <a href="#">
                      <i className="fa fa-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-facebook"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-google-plus"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-youtube"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-linkedin"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-whatsapp"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xs-12 col-sm-6 col-md-3 mt-paddingbottomsm">
              <div className="f-widget-news">
                <h3 className="f-widget-heading">Twitter</h3>
                <div className="news-articles">
                  <div className="news-column">
                    <i className="fa fa-twitter"></i>
                    <div className="txt-box">
                      <p>
                        Laboris nisi ut <a href="#">#schön</a> aliquip econse-{" "}
                        <br />
                        quat. <a href="#">https://t.co/vreNJ9nEDt</a>
                      </p>
                    </div>
                  </div>
                  <div className="news-column">
                    <i className="fa fa-twitter"></i>
                    <div className="txt-box">
                      <p>
                        Ficia deserunt mollit anim id est labo- <br />
                        rum. incididunt ut labore et dolore <br />
                        <a href="#">https://t.co/vreNJ9nEDt</a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xs-12 col-sm-6 col-md-3 mt-paddingbottomxs">
              <div className="f-widget-tabs">
                <h3 className="f-widget-heading">Product Tags</h3>
                <ul className="list-unstyled tabs">
                  <li>
                    <a href="#">Sofas</a>
                  </li>
                  <li>
                    <a href="#">Armchairs</a>
                  </li>
                  <li>
                    <a href="#">Living</a>
                  </li>
                  <li>
                    <a href="#">Bedroom</a>
                  </li>
                  <li>
                    <a href="#">Lighting</a>
                  </li>
                  <li>
                    <a href="#">Tables</a>
                  </li>
                  <li>
                    <a href="#">Pouf</a>
                  </li>
                  <li>
                    <a href="#">Wood</a>
                  </li>
                  <li>
                    <a href="#">Office</a>
                  </li>
                  <li>
                    <a href="#">Outdoor</a>
                  </li>
                  <li>
                    <a href="#">Kitchen</a>
                  </li>
                  <li>
                    <a href="#">Stools</a>
                  </li>
                  <li>
                    <a href="#">Footstools</a>
                  </li>
                  <li>
                    <a href="#">Desks</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xs-12 col-sm-6 col-md-3 text-right">
              <div className="f-widget-about">
                <h3 className="f-widget-heading">Information</h3>
                <ul className="list-unstyled address-list align-right">
                  <li>
                    <i className="fa fa-map-marker"></i>
                    <address>
                      Connaugt Road Central Suite 18B, 148 <br />
                      New Yankee
                    </address>
                  </li>
                  <li>
                    <i className="fa fa-phone"></i>
                    <a href="tel:15553332211">+1 (555) 333 22 11</a>
                  </li>
                  <li>
                    <i className="fa fa-envelope-o"></i>
                    <a href="mailto:&#105;&#110;&#102;&#111;&#064;&#115;&#099;&#104;&#111;&#110;&#046;&#099;&#104;&#097;&#105;&#114;">
                      &#105;&#110;&#102;&#111;&#064;&#115;&#099;&#104;&#111;&#110;&#046;&#099;&#104;&#097;&#105;&#114;
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-area">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-6">
              <p>
                © <a href="#">schön.</a> - All rights Reserved
              </p>
            </div>
            <div className="col-xs-12 col-sm-6 text-right">
              <div className="bank-card">
                <img src="/assets/images/bank-card.png" alt="bank-card" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default PageFooter;
