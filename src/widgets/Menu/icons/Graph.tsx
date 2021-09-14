import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 32 32" width="24px" color="text" {...props} >
      <image width={90} height={90} href="/images/egg/chart.svg"/></Svg>
  );
};

export default Icon;
