import { useEffect, useMemo, useState } from "react";
import config from "../../amplifyconfiguration.json";
import { Amplify } from "aws-amplify";
import {
  fetchAuthSession,
  getCurrentUser,
  signIn,
  signOut,
} from "aws-amplify/auth";
import { useJwt } from "react-jwt";

Amplify.configure(config);

interface UseAuthenticationState {
  error: string;
  accessToken: string;
  refreshToken: string;
  isUserSignedIn: boolean;
  isAdmin: boolean;
  signInUser: (credentials: Credentials) => void;
  signOutUser: VoidFunction;
}

const useAuthentication = (): UseAuthenticationState => {
  const [accessToken, setAccessToken] = useState<string>(null);
  const [refreshToken, setRefreshToken] = useState<string>(null);
  const [error, setError] = useState<string>(null);
  const [isUserSignedIn, setIsUserSignedIn] = useState<boolean>(false);

  const { decodedToken } = useJwt(accessToken);

  const isAdmin = useMemo<boolean>(
    () => decodedToken?.["cognito:groups"]?.[0] === "admin",
    [decodedToken]
  );

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
              setIsUserSignedIn(false);
            }
          });
      })
      .catch((reason) => {
        if (!ignoreError) {
          setError(reason.message);
          setIsUserSignedIn(false);
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
        setIsUserSignedIn(value.isSignedIn);

        if (value.isSignedIn) {
          setError(null);
        } else {
          setError(value.nextStep?.signInStep);
          setIsUserSignedIn(false);
        }
      })
      .catch((reason) => {
        setError(reason.message);
        setIsUserSignedIn(false);
      });
  };

  const signOutUser = () => {
    signOut()
      .then(() => {
        setError(null);
        setIsUserSignedIn(false);
      })
      .catch((reason) => {
        setError(reason.message);
        setIsUserSignedIn(true);
      });
  };

  return {
    accessToken,
    refreshToken,
    isUserSignedIn,
    isAdmin,
    error,
    signInUser,
    signOutUser,
  };
};

export default useAuthentication;
