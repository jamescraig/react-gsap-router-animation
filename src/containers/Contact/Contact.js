import React from "react";

const Contact = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "flex-start",
        width: "100%",
        minHeight: "calc(100vh - 9.6rem)",
        paddingTop: "9.6rem",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "flex-start",
          textAlign: "flex-start",
          maxWidth: "60rem",
          margin: "0 2em"
        }}
      >
      <h1>SCIENCE</h1>
      <h3>NOTE: Each additional field adds 10% to bounce rates.</h3>
      <h3>
        That's why we only force the user to fill out 47 fields before signing
        up.
      </h3>
      <form>
        First name:<br />
        <input type="text" name="firstname" />
        <br />
        Last name:<br />
        <input type="text" name="lastname" />
        <input type="submit" />
      </form>
      </div>
    </div>
  );
};

export default Contact;
