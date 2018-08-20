import React from "react";

const NotFound = ({ location }) => {
  return (
    <div
      style={{
        padding: "9.6rem 3.2rem 3.2rem 3.2rem",
        backgroundImage: "url('http://i.imgur.com/PuviQ.jpg')",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center center",
        minHeight: "calc(100vh - 12.8rem)",
        color: "#ff5043"
      }}
    >
      <h1>BRUTAL 404 ANOMALY</h1>
      <h4>Our records show you attempted to visit: {location.pathname}</h4>
      We don't expressly recommend navigating there since the page doesn't
      exist.<br />
      You dun goof'd<br />
      <br />
    </div>
  );
};

export default NotFound;
