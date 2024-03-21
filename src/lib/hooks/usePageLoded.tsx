import { useEffect, useState } from "react";

interface UsePageLoadedState {
  isPageLoaded: boolean;
}

const usePageLoaded = (): UsePageLoadedState => {
  const [isPageLoaded, setIsPageLoaded] = useState<boolean>(false);

  useEffect(() => {
    // callback function to call when event triggers
    const onPageLoad = () => {
      setIsPageLoaded(true);
      // do something else
    };

    // Check if the page has already loaded
    if (document.readyState === "complete") {
      onPageLoad();
    } else {
      setIsPageLoaded(false);
      window.addEventListener("load", onPageLoad, false);
      // Remove the event listener when component unmounts
      return () => window.removeEventListener("load", onPageLoad);
    }
  }, []);

  return { isPageLoaded };
};

export default usePageLoaded;
