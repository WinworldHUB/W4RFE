import { FC } from "react";

const RightSideMenu: FC = () => {
  return (
    <div className="mt-side-menu">
      <div className="mt-holder">
        <a href="#" className="side-close">
          <span></span>
          <span></span>
        </a>
        <strong className="mt-side-title">MY ACCOUNT</strong>
        <div className="mt-side-widget">
          <header>
            <span className="mt-side-subtitle">SIGN IN</span>
            <p>Welcome back! Sign in to Your Account</p>
          </header>
          <form action="#">
            <fieldset>
              <input
                type="text"
                placeholder="Username or email address"
                className="input"
              />
              <input type="password" placeholder="Password" className="input" />
              <div className="box">
                <span className="left">
                  <input className="checkbox" type="checkbox" id="check1" />
                  <label htmlFor="check1">Remember Me</label>
                </span>
                <a href="#" className="help">
                  Help?
                </a>
              </div>
              <button type="submit" className="btn-type1">
                Login
              </button>
            </fieldset>
          </form>
        </div>
        <div className="or-divider">
          <span className="txt">or</span>
        </div>
        <div className="mt-side-widget">
          <header>
            <span className="mt-side-subtitle">CREATE NEW ACCOUNT</span>
            <p>Create your very own account</p>
          </header>
          <form action="#">
            <fieldset>
              <input
                type="text"
                placeholder="Username or email address"
                className="input"
              />
              <button type="submit" className="btn-type1">
                Register
              </button>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RightSideMenu;
