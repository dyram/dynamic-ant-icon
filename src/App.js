import React from "react";
import "antd/dist/antd.css";

//Icon component import
import AntIcon from "./AntIcon";

//App is the component in which you will import Icon component
export default function App() {
  return (
    <>
      <AntIcon name="CheckCircleOutlined" style={{ fontSize: "xx-large" }} />
      <AntIcon
        name="HeartIcon"
        style={{ color: "hotpink", fontSize: "x-large" }}
      />
      <AntIcon name="HeartIconGreen" />
      <AntIcon name="PandaIcon" style={{ fontSize: "xxx-large" }} />
    </>
  );
}
