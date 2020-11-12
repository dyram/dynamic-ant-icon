import React from "react";
import * as AntdIcons from "@ant-design/icons";

//AntD default Icons
import Icon from "@ant-design/icons";

//Icon from Config
import { icons } from "./data.json";

export default function AntIcon(props) {
  const { name, className, rotate, spin, style, type } = props;

  function getIconLayout() {
    const IconSelected = AntdIcons[name];
    return IconSelected ? (
      <IconSelected
        className={className}
        spin={spin}
        rotate={rotate}
        style={style}
      />
    ) : (
      getSvgIcon(name)
    );
  }

  function getSvgIcon(svgIconName) {
    return (
      <Icon
        component={() => {
          return (
            <svg {...icons[svgIconName].svgProps}>
              {icons[svgIconName].paths.map((pathProps, index) => (
                <path key={svgIconName + index} {...pathProps} />
              ))}
            </svg>
          );
        }}
        style={style}
        rotate={rotate}
        spin={spin}
      />
    );
  }

  return getIconLayout();
}
