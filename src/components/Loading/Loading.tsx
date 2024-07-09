import React from "react";
import { AiOutlineLoading } from "react-icons/ai";

interface LoadingProps {
  children?: React.PropsWithChildren;
  isLoading: boolean;
}

const Loading: React.FC<LoadingProps> = (props) => {
  const { isLoading, children } = props;
  return (
    <>
      {isLoading ? (
        <AiOutlineLoading size={24} className="animate-spin" />
      ) : (
        { children }
      )}
    </>
  );
};

export default Loading;
