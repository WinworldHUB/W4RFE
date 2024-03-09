// import { useEffect, useState } from "react";
// import config from "../../amplifyconfiguration.json";
// import { Amplify } from "aws-amplify";
// import {
//   AuthUser,
//   fetchAuthSession,
//   getCurrentUser,
//   signIn,
//   signOut,
// } from "aws-amplify/auth";

// Amplify.configure(config);

// interface UseAuthenticationState {
//   error: string;
//   accessToken: string;
//   refreshToken: string;
//   isUserSignedIn: boolean;
//   signInUser: (credentials: Credentials) => void;
//   signOutUser: VoidFunction;
// }

// const useAuthentication = (): UseAuthenticationState => {
//   const [signedInUser, setSignedInUser] = useState<AuthUser>(null);
//   const [accessToken, setAccessToken] = useState<string>(null);
//   const [refreshToken, setRefreshToken] = useState<string>(null);
//   const [error, setError] = useState<string>(null);
//   const [isSignInDone, setIsSignInDone] = useState<boolean>(false);

//   const getUserData = (ignoreError: boolean) => {
//     getCurrentUser()
//       .then((user) => {
//         setSignedInUser(user);
//         fetchAuthSession()
//           .then((session) => {
//             setAccessToken(session.tokens?.accessToken.toString());
//             setRefreshToken(session.tokens?.idToken.toString());
//           })
//           .catch((reason) => {
//             if (!ignoreError) {
//               setSignedInUser(null);
//               setError(reason.message);
//             }
//           });
//       })
//       .catch((reason) => {
//         if (!ignoreError) {
//           setSignedInUser(null);
//           setError(reason.message);
//         }
//       });
//   };

//   useEffect(() => {
//     getUserData(true);
//   }, []);

//   useEffect(() => {
//     if (isSignInDone) {
//       getUserData(false);
//     }
//   }, [isSignInDone]);

//   const signInUser = (credentials: Credentials) => {
//     signIn({ username: credentials.email, password: credentials.password })
//       .then((value) => {
//         setIsSignInDone(value.isSignedIn);

//         if (value.isSignedIn) {
//           setError(null);
//         } else {
//           setError(value.nextStep?.signInStep);
//         }
//       })
//       .catch((reason) => {
//         setSignedInUser(null);
//         setError(reason.message);
//       });
//   };

//   const signOutUser = () => {
//     signOut()
//       .then(() => {
//         setSignedInUser(null);
//         setError(null);
//       })
//       .catch((reason) => {
//         setSignedInUser(null);
//         setError(reason.message);
//       });
//   };

//   return {
//     accessToken,
//     refreshToken,
//     isUserSignedIn: signedInUser !== null,
//     error,
//     signInUser,
//     signOutUser,
//   };
// };

const useAuthentication = () => {
  return {};
};

export default useAuthentication;
