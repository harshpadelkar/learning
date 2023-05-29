import React from "react";

import "./style.scss";

const ContentWrapper = ({ style, children }) => {
  return (
    <div style={style} className="contentWrapper">
      {children}
    </div>
  );
};

export default ContentWrapper;
