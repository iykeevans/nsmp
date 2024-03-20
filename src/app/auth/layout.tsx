import React from "react";

import NavBar from "@/components/navbar";

interface IProps {
  children: React.ReactNode;
}

const AuthLayout = (props: IProps) => {
  const { children } = props;

  return (
    <div>
      <NavBar />
      {children}
    </div>
  );
};

export default AuthLayout;
