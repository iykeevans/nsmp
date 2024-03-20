import React from "react";

import Logo from "./logo";

const Navbar = () => {
  return (
    <div className="fixed flex items-center h-[100px] pl-6">
      <a href="/">
        <Logo />
      </a>
    </div>
  );
};

export default Navbar;
