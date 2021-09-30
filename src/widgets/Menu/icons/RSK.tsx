import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" height="180" width="180" fill="none" viewBox="-14.4 -24 124.8 144"  {...props}>
      <image width={90} height={90} href="/images/home/rsk-icon.png"/>
    </Svg>
  );
};

export default Icon;
