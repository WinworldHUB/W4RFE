import { FC, useContext, useEffect, useState } from "react";
import PageLayout from "../lib/components/page-layout";
import useAuthentication from "../lib/hooks/useAuthentication";
import { AppContext } from "../lib/contexts/app-context";
import { Link } from "react-router-dom";

const SignIn: FC<PageProps> = (pageProps) => {
  const {
    error: loginError,
    isUserSignedIn,
    signInUser,
    signOutUser,
    username,
    accessToken,
    refreshToken,
  } = useAuthentication();

  const { appState, updateAppState } = useContext(AppContext);

  useEffect(() => {
    updateAppState({
      ...appState,
      isUserLoggedIn: isUserSignedIn,
      username: username,
      accessToken: accessToken,
      refreshToken: refreshToken,
    });

    if (isUserSignedIn && username) {
      window.location.reload();
    }
  }, [isUserSignedIn, username]);

  const [credentials, setCredentials] = useState<Credentials>({
    email: "",
    password: "",
  });

  return (
    <PageLayout {...pageProps}>
      <section className="mt-contact-banner sign-in-banner">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 text-center">
              <h1>login</h1>
              <nav className="breadcrumbs">
                <ul className="list-unstyled">
                  <li>
                    <a href="index.html">
                      home <i className="fa fa-angle-right"></i>
                    </a>
                  </li>
                  <li>login</li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </section>
      {!isUserSignedIn && (
        <section className="mt-detail-sec toppadding-zero paddingbootom-md">
          <div className="container">
            <div className="row">
              <div className="col-xs-12 col-sm-8 col-sm-push-2">
                <div className="holder m-0">
                  <div className="mt-side-widget">
                    <header>
                      <h2>SIGN IN</h2>
                      <p>Welcome back! Sign in to Your Account</p>
                    </header>
                    <form action="#">
                      <fieldset>
                        <input
                          type="text"
                          placeholder="Email address"
                          className="input"
                          value={credentials.email}
                          onChange={(e) =>
                            setCredentials({
                              ...credentials,
                              email: e.target.value,
                            })
                          }
                        />
                        <input
                          type="password"
                          placeholder="Password"
                          className="input"
                          value={credentials.password}
                          onChange={(e) =>
                            setCredentials({
                              ...credentials,
                              password: e.target.value,
                            })
                          }
                        />
                        <div className="box text-center">
                          <button
                            type="button"
                            className="btn-type1"
                            onClick={() => {
                              signInUser(credentials);
                            }}
                          >
                            Login
                          </button>
                        </div>
                        <div className="text-center">
                          <span className="text-danger">
                            {loginError ?? ""}
                          </span>
                        </div>
                      </fieldset>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
      {isUserSignedIn && (
        <section className="mt-detail-sec toppadding-zero paddingbootom-md">
          <div className="container">
            <div className="row">
              <div className="col-xs-12 col-sm-8 col-sm-push-2">
                <div className="holder m-0">
                  <div className="mt-side-widget">
                    <header>
                      <h2>SIGN OUT</h2>
                      <p>
                        You are currently signed in. To sign-out use the button
                        below
                      </p>
                    </header>
                    <form action="#">
                      <fieldset>
                        <div className="box text-center">
                          <button
                            type="button"
                            className="btn-type1"
                            onClick={() => {
                              signOutUser();
                            }}
                          >
                            Sign-out
                          </button>
                        </div>
                      </fieldset>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </PageLayout>
  );
};

export default SignIn;
