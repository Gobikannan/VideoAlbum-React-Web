import React from "react";
import "./header.component.scss";

const HeaderNavBar: React.FunctionComponent = () => {
  return (
    <div className="NavBar">
      <div className="logo ms-font-xl">
        <strong>Video Album</strong>
      </div>
    </div>
  );
};

export default HeaderNavBar;
