import { FC, useState } from "react";
import PageLayout from "../lib/components/page-layout";
import useAuthentication from "../lib/hooks/useAuthentication";
import { EMPTY_CHANGE_PASSWORD_MODEL } from "../lib/constants";

const UserProfile: FC<PageProps> = (pageProps) => {
  const { error, changePassword } = useAuthentication();

  const [changePasswordModel, setChangePasswordModel] =
    useState<ChangePasswordModel>(EMPTY_CHANGE_PASSWORD_MODEL);

  return (
    <PageLayout {...pageProps}>
      <div className="container mt-3">
        <div className="row">
          <div className="col-sm-3 col-xs-1"></div>
          <div className="col align-self-center bg-light">
            <div className="holder m-0">
              <div className="mt-side-widget">
                <header>
                  <h2>CHANGE PASSWORD</h2>
                  <p>
                    Change your password! Use combination of alphabets, number
                    and special characters. Passwords must be minimum 8
                    character long
                  </p>
                </header>
                <form action="#">
                  <fieldset>
                    <input
                      type="password"
                      placeholder="Current password"
                      className="input"
                      value={changePasswordModel.oldPassword}
                      onChange={(e) =>
                        setChangePasswordModel({
                          ...changePasswordModel,
                          oldPassword: e.target.value,
                        })
                      }
                    />
                    <input
                      type="password"
                      placeholder="New Password"
                      className="input"
                      value={changePasswordModel.newPassword}
                      onChange={(e) =>
                        setChangePasswordModel({
                          ...changePasswordModel,
                          newPassword: e.target.value,
                        })
                      }
                    />
                    <div className="box text-center">
                      <button
                        type="button"
                        className="btn-type1"
                        onClick={() => {
                          changePassword(changePasswordModel, () => {
                            alert("Password changed successfully");
                            setChangePasswordModel(EMPTY_CHANGE_PASSWORD_MODEL);
                          });
                        }}
                      >
                        Change Password
                      </button>
                    </div>
                    <div className="text-center">
                      <span className="text-danger">{error ?? ""}</span>
                    </div>
                  </fieldset>
                </form>
              </div>
            </div>
          </div>
          <div className="col-sm-3 col-xs-1"></div>
        </div>
      </div>
      <hr className="border-0" />
    </PageLayout>
  );
};

export default UserProfile;
