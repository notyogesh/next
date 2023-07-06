import React from "react";

const Navbar = (props) => {
  return (
    <div>
      <h1>navbar</h1>
      {props.children}
      <h1>footer</h1>
    </div>
  );
};

export default Navbar;
