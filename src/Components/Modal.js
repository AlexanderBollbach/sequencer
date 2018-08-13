import React from "react";

export default ({ children, outsideTapped }) => {
  return (
    <div
      onClick={() => outsideTapped()}
      style={{
        position: "absolute",
        top: "0",
        left: "0",
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgb(0,0,0,0.5)"
      }}
    >
      {children}
    </div>
  );
};
