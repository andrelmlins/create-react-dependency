import React from "react";

export const Lib = props => (
  <button
    style={{
      border: "none",
      boxShadow: "none",
      backgroundColor: "#00838f",
      color: "#FFF",
      padding: "0px 20px",
      fontSize: 20,
      height: 40
    }}
    {...props}
  />
);

export default Lib;
