import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" height="800" width="1200" fill="none" viewBox="-14.4 -24 124.8 144"  {...props}>
      <circle fill="#0b0e11" r="48" cy="48" cx="48"/><path fill="#f0b90b" d="M34.5355 42.4676l13.4647-13.4644 13.4715 13.4715 7.8346-7.835-21.3061-21.3064-21.2995 21.2995zm-13.3672-2.303l7.8347 7.8347-7.8351 7.8351-7.8346-7.8347zm13.3672 13.3676l13.4647 13.464 13.4712-13.4708 7.8391 7.8308-.0042.004-21.3061 21.3064-21.2998-21.2994-.0109-.0108zm48.1319-5.5315l-7.8347 7.8346-7.8346-7.8346 7.8346-7.8347z"/><path fill="#f0b90b" d="M55.9466 47.996h.0036l-7.9503-7.9504-7.9542 7.9542.0108.0111 7.9434 7.9434 7.954-7.9545z"/>
    </Svg>
  );
};

export default Icon;
