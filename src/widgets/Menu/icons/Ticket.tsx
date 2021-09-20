import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg height="512" viewBox="0 0 64 64" width="512" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="m7 9-3 8v44h34v-44l3-8z" fill="#99b351"/><path d="m41 9-3 8v44h6v-44z" fill="#7ea34e"/><path d="m7 3h34v6h-34z" fill="#7ea34e"/><path d="m19 3v6l-4 8v21l5-5 5 5v-21l4-8v-6z" fill="#cade7a"/><g fill="#006837"><path d="m9 42a12 12 0 0 1 12 12 0 0 0 0 1 0 0 12 12 0 0 1 -12-12 0 0 0 0 1 0 0z"/><path d="m33 38a0 0 0 0 1 0 0 12 12 0 0 1 -12 12 0 0 0 0 1 0 0 12 12 0 0 1 12-12z" transform="matrix(-1 0 0 -1 54 88)"/><path d="m21 58a1 1 0 0 1 -1-1v-9.4a10.878 10.878 0 0 0 -1.832-6.05 1 1 0 0 1 1.664-1.11 12.873 12.873 0 0 1 2.168 7.165v9.395a1 1 0 0 1 -1 1z"/></g><path d="m52 38h-10l-3 5v18h16v-18z" fill="#ccc"/><path d="m39 52h16v9h-16z" fill="#cade7a"/><path d="m59 56h-2v-19.5a4.5 4.5 0 0 0 -9 0v5.5h-2v-5.5a6.5 6.5 0 0 1 13 0z" fill="#fcf5a8"/><path d="m55 55h6v6h-6z" fill="#a67c52"/><circle cx="47" cy="43" fill="#f2f2f2" r="2"/>
    </Svg>
  );
};

export default Icon;
