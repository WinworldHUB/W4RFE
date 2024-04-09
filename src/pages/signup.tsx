import { FC, useState } from "react";
import PageLayout from "../lib/components/page-layout";
import useAuthentication from "../lib/hooks/useAuthentication";
import useApi from "../lib/hooks/useApi";
import { MEMBERS_APIS } from "../lib/constants/api-constants";
import { useNavigate } from "react-router-dom";
import { PageRoutes } from "../lib/constants";

const SignUp: FC<PageProps> = (pageProps) => {
  const navigate = useNavigate();
  const { postData: postCredentials } = useApi();
  const { error: loginError, isUserSignedIn } = useAuthentication();
  const [credentials, setCredentials] = useState<SignUpCredentials>({
    username: "",
    confirmationCode: "",
  });

  const handleSubmit = async (credentials: SignUpCredentials) => {
    try {
      const data = await postCredentials(MEMBERS_APIS.SIGN_UP_API, credentials);
      if (data) {
        navigate(PageRoutes.Login);
      }
    } catch (error) {
      console.log("error", error);
    }
  };

  return (
    <PageLayout {...pageProps}>
      {!isUserSignedIn && (
        <section className="mt-detail-sec toppadding-zero paddingbootom-md">
          <div className="container">
            <div className="row">
              <div className="col-xs-12 col-sm-8 col-sm-push-2">
                <div className="holder m-0">
                  <div className="mt-side-widget">
                    <header>
                      <h2> ConFirm Email</h2>
                      <p>Welcome !! ConFirm Your Email</p>
                    </header>
                    <form action="#">
                      <fieldset>
                        <input
                          type="text"
                          placeholder="User ID"
                          className="input"
                          value={credentials.username}
                          onChange={(e) =>
                            setCredentials({
                              ...credentials,
                              username: e.target.value,
                            })
                          }
                        />
                        <p className="help-text">
                          Your User Id is not your Email. You can find your User
                          Id in the email we sent to your registered email
                          address
                        </p>
                        <br />
                        <input
                          type="password"
                          placeholder="Recieved Code"
                          className="input"
                          value={credentials.confirmationCode}
                          onChange={(e) =>
                            setCredentials({
                              ...credentials,
                              confirmationCode: e.target.value,
                            })
                          }
                        />
                        <div className="box text-center">
                          <button
                            type="button"
                            className="btn-type2"
                            onClick={() => {
                              handleSubmit(credentials);
                            }}
                          >
                            Submit
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
    </PageLayout>
  );
};

export default SignUp;
