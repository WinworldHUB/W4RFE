import { createContext, useState } from "react";
import {
  DEFAULT_APP_STATE,
  DEFAULT_LOCAL_STORAGE_KEY_FOR_APP_STATE,
} from "../constants";
import useLocalStorage from "../hooks/useLocalStorage";

interface UseAppStateProps {
  appState: AppState;
  updateAppState: ({
    isUserLoggedIn,
    accessToken,
    refreshToken,
    selectedProductId,
    order,
    username,
  }: AppState) => void;
}

const useAppState = (): UseAppStateProps => {
  const { setValue: saveAppState, getValue: getSavedAppState } =
    useLocalStorage<AppState>();
  const [appState, setAppState] = useState<AppState>(
    getSavedAppState(DEFAULT_LOCAL_STORAGE_KEY_FOR_APP_STATE) ??
      DEFAULT_APP_STATE
  );

  const updateAppState = ({
    isUserLoggedIn,
    accessToken,
    refreshToken,
    selectedProductId,
    order,
    username,
  }: AppState) => {
    const updatedAppState = appState;
    updatedAppState.isUserLoggedIn = isUserLoggedIn ?? false;
    updatedAppState.accessToken = accessToken ?? "";
    updatedAppState.refreshToken = refreshToken ?? "";
    updatedAppState.selectedProductId = selectedProductId ?? "";
    updatedAppState.order = order ?? {};
    updatedAppState.username = username ?? "";

    setAppState(updatedAppState);

    saveAppState(DEFAULT_LOCAL_STORAGE_KEY_FOR_APP_STATE, updatedAppState);
  };

  return { appState, updateAppState };
};

const AppContext = createContext<UseAppStateProps>(null);

const AppContextProvider = ({ children }: ContextProviderProps) => {
  return (
    <AppContext.Provider value={useAppState()}>{children}</AppContext.Provider>
  );
};

export { AppContext, AppContextProvider };
