import React, { useState } from "react";

interface UseLoaderState {
  loader: React.ReactNode;
  show: VoidFunction;
  hide: VoidFunction;
}

const useLoader = (): UseLoaderState => {
  const [loader, setLoader] = useState<React.ReactNode>(<></>);

  const show = () => setLoader(<></>);
  const hide = () => setLoader(<></>);

  return { loader, show, hide };
};

export default useLoader;
