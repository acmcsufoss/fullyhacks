import React from "react";
import { AiOutlineLoading } from "react-icons/ai";

interface LoadingProps {
  children?: React.PropsWithChildren;
  isLoading: boolean;
}

export default function Loading(props: LoadingProps) {
  const { isLoading, children } = props;
  return (
    <>
      {isLoading ? (
        <AiOutlineLoading size={24} className="animate-spin text-white" />
      ) : (
        { children }
      )}
    </>
  );
}
