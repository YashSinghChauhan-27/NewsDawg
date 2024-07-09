import React from "react";
import newsdawglogo from "../components/titlelogo.png";
const TitleBar = () => {
  const titleBarStyle = {
    color: "white",
    textAlign: "center",
    padding: "20px 0",
    fontFamily: "Times New Roman, serif",
    height: "150px",
    marginTop: "57px",
  };

  return (
    <div style={titleBarStyle}>
      <h1 style={{ fontSize: "100px", color:"black" }}>
        {" "}NEWS{"   "}
        <img
          src={newsdawglogo}
          alt="Newsdawg Logo"
          style={{ verticalAlign: "middle", height: "100px", width: "auto", marginBottom: '20px' }}
        />{"   "}
        DA<span style={{ color: "#FC5607" }}>W</span>G{" "}
      </h1>
    </div>
  );
};

export default TitleBar;
