import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg height="512" viewBox="0 0 64 64" width="512" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="m32 20a0 0 0 0 1 0 0 15 15 0 0 1 -15 15 0 0 0 0 1 0 0 15 15 0 0 1 15-15z" fill="#99b351" transform="matrix(0 1 -1 0 52 3)"/><path d="m28 31 4 4a14.974 14.974 0 0 0 -7-12.673v5.673z" fill="#77934a"/><path d="m25 28-8-8a14.942 14.942 0 0 0 4.826 11h6.174z" fill="#7ea34e"/><path d="m12 37a20 20 0 0 1 20 20 0 0 0 0 1 0 0 20 20 0 0 1 -20-20 0 0 0 0 1 0 0z" fill="#77934a"/><path d="m21 46-9-9a19.885 19.885 0 0 0 4.027 12h7.973z" fill="#7ea34e"/><path d="m24 49 4 4v-7.964a20.063 20.063 0 0 0 -7-5.879v6.843z" fill="#99b351"/><path d="m31 22h2v40h-2z" fill="#7ea34e"/><path d="m49 29a0 0 0 0 1 0 0 17 17 0 0 1 -17 17 0 0 0 0 1 0 0 17 17 0 0 1 17-17z" fill="#99b351"/><path d="m41 37v-6a16.993 16.993 0 0 0 -9 15l6-6z" fill="#77934a"/><path d="m41 37-3 3h6.949a16.922 16.922 0 0 0 4.051-11z" fill="#7ea34e"/><path d="m32 24-1.776-2.595a13.356 13.356 0 0 1 -.786-13.414l2.562-4.991 2.562 4.991a13.356 13.356 0 0 1 -.786 13.414z" fill="#77934a"/><path d="m32 18 4-4a13.266 13.266 0 0 0 -1.437-6.01l-2.563-4.99z" fill="#99b351"/><path d="m32 12-3.013-3.013a13.355 13.355 0 0 0 1.237 12.418l1.776 2.595z" fill="#7ea34e"/>
    </Svg>
  );
};

export default Icon;
