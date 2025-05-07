import React from "react";
import { AiOutlineLoading } from "react-icons/ai";

export default function Loading({
  children,
  isLoading
}: {
  children?: React.PropsWithChildren;
  isLoading: boolean;
}) {
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
