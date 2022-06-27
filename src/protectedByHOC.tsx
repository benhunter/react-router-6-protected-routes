import React from "react";
import { Navigate } from "react-router-dom";

type protectedByHOCProps = { loggedIn: boolean };

const protectedByHOC = <P extends protectedByHOCProps>(
  Component: React.ComponentType<P>
) => (props: P) => {
  if (!props.loggedIn) return <Navigate to="/login" />;
  return <Component {...(props as P)} />;
};

export default protectedByHOC;
