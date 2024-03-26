import { useEffect, useState } from "react";
import config from "../../amplifyconfiguration.json";
import { Amplify } from "aws-amplify";
import {
  fetchAuthSession,
  getCurrentUser,
  signIn,
  signOut,
} from "aws-amplify/auth";
import useApi from "./useApi";
import { Member } from "../../awsApis";

Amplify.configure(config);

interface UseAuthenticationState {
  error: string;
  accessToken: string;
  refreshToken: string;
  isUserSignedIn: boolean;
  signInUser: (credentials: Credentials) => void;
  signOutUser: VoidFunction;
}

const useAuthentication = (): UseAuthenticationState => {
  const [accessToken, setAccessToken] = useState<string>(null);
  const [refreshToken, setRefreshToken] = useState<string>(null);
  const [error, setError] = useState<string>(null);
  const [isUserSignedIn, setIsSignInDone] = useState<boolean>(false);

  const getUserData = (ignoreError: boolean) => {
    getCurrentUser()
      .then((user) => {
        fetchAuthSession()
          .then((session) => {
            setAccessToken(session.tokens?.accessToken.toString());
            setRefreshToken(session.tokens?.idToken.toString());
          })
          .catch((reason) => {
            if (!ignoreError) {
              setError(reason.message);
              setIsSignInDone(false);
            }
          });
      })
      .catch((reason) => {
        if (!ignoreError) {
          setError(reason.message);
          setIsSignInDone(false);
        }
      });
  };

  useEffect(() => {
    getUserData(true);
  }, []);

  useEffect(() => {
    if (isUserSignedIn) {
      getUserData(false);
    }
  }, [isUserSignedIn]);

  const signInUser = (credentials: Credentials) => {
    signIn({ username: credentials.email, password: credentials.password })
      .then((value) => {
        setIsSignInDone(value.isSignedIn);

        if (value.isSignedIn) {
          setError(null);
        } else {
          setError(value.nextStep?.signInStep);
          setIsSignInDone(false);
        }
      })
      .catch((reason) => {
        signOutUser();
        setError(reason.message);
        setIsSignInDone(false);
      });
  };

  const signOutUser = () => {
    signOut()
      .then(() => {
        setError(null);
        setIsSignInDone(false);
      })
      .catch((reason) => {
        setError(reason.message);
        setIsSignInDone(true);
      });
  };

  return {
    accessToken,
    refreshToken,
    isUserSignedIn,
    error,
    signInUser,
    signOutUser,
  };
};

export default useAuthentication;
