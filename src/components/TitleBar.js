import React from "react";
import newsdawglogo from "../components/newsdawglogo.png";
import decoration from "../components/decoration.png";

const TitleBar = () => {
  const titleBarStyle = {
    backgroundColor: "#350a58",
    color: "white",
    textAlign: "center",
    padding: "20px 0",
    fontFamily: "Times New Roman, serif",
    height: "150px",
    marginTop: "57px",
  };

  return (
    <div style={titleBarStyle}>
      <h1 style={{ fontSize: "100px" }}>
        <img
          src={decoration}
          alt="Newsdawg Logo"
          style={{ verticalAlign: "middle", height: "50px", width: "auto", marginBottom: '20px' }}
        />
        {" "}NEWS{"   "}
        <img
          src={newsdawglogo}
          alt="Newsdawg Logo"
          style={{ verticalAlign: "middle", height: "100px", width: "auto", marginBottom: '20px' }}
        />{"   "}
        DA<span style={{ color: "#FC5607" }}>W</span>G{" "}
        <img
          src={decoration}
          alt="Newsdawg Logo"
          style={{ verticalAlign: "middle", height: "50px", width: "auto", marginBottom: '20px' }}
        />
      </h1>
    </div>
  );
};

export default TitleBar;
