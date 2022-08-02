import React from "react";
//main layout

import "./main_layout.scss";
const mainLayout = (props) => {
  return <div className="MainContainer">{props.children}</div>;
};

export default mainLayout;
