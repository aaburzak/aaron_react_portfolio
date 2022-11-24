import React from "react";
import pic from "../images/aaronpic.png";

function ProfilePic() {
  return (
    <img
      src={pic}
      className="shadow rounded-circle"
      style={{
        maxWidth: "100%",
        margin: "0 auto 2rem",
        display: "block",
      }}
    />
  );
}

export default ProfilePic;
