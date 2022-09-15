import React from "react";

const FourZeroFourPage = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <h3
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "grey",
          fontFamily: "sans-serif",
        }}
      >
        <span style={{ color: "black" }}>404</span>
        <span
          style={{
            fontSize: "50px",
            margin: "0 20px",
            fontWeight: "100",
            marginTop: "-7px",
          }}
        >
          |
        </span>
        This page could not be found.
      </h3>
    </div>
  );
};

export default FourZeroFourPage;
