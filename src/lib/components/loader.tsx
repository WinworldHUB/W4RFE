import { FC } from "react";

interface LoaderProps {
  message?: string;
}

const Loader: FC<LoaderProps> = ({ message = "Loading ..." }) => {
  return (
    <div className="d-flex justify-content-center">
      <img
        src="/assets/images/loader.gif"
        alt="loading"
        className="thumbnail-50"
      />
      <p>{message}</p>
    </div>
  );
};

export default Loader;
