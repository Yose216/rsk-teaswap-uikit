import { Colors } from "./types";

export const baseColors = {
  failure: "#ED4B9E",
  primary: "#546a2a",
  primaryBright: "#546a2a",
  primaryDark: "#546a2a",
  secondary: "#6D8442",
  success: "#546a2a",
  warning: "#FFB237",
  yellow: "#FFFF00",
  blue: "#0000FF",
  red: "#FF0000",
  grey: "#808080",
  link: "#008e46"
};

export const additionalColors = {
  binance: "#F0B90B",
  overlay: "#d3f7e4",
};

export const lightColors: Colors = {
  ...baseColors,
  ...additionalColors,
  background: "#d3f7e4",
  backgroundDisabled: "#E9EAEB",
  backgroundAlt: "#FFFFFF",
  cardBorder: "#E7E3EB",
  contrast: "#191326",
  dropdown: "#F6F6F6",
  dropdownDeep: "#EEEEEE",
  invertedContrast: "#FFFFFF",
  input: "#eeeaf4",
  inputSecondary: "#d7caec",
  tertiary: "#EFF4F5",
  text: "#546a2a",
  borderColor: "#E9EAEB",
  textDisabled: "#BDC2C4",
  textSubtle: "#546a2a",
  disabled: "#E9EAEB",
  gradients: {
    bubblegum: "linear-gradient(100deg,#A7D1A9 0%,#6F9E8C 100%)",
    inverseBubblegum: "linear-gradient(100deg, #6F9E8C 0%, #A7D1A9 100%)",
    cardHeader: "linear-gradient(111.68deg, #F2ECF2 0%, #E8F2F6 100%)",
    blue: "linear-gradient(180deg, #A7E8F1 0%, #94E1F2 100%)",
    violet: "linear-gradient(180deg, #E2C9FB 0%, #CDB8FA 100%)",
    violetAlt: "linear-gradient(180deg, #CBD7EF 0%, #9A9FD0 100%)",
    gold: "linear-gradient(180deg, #FFD800 0%, #FDAB32 100%)",
  },
};

export const darkColors: Colors = {
  ...baseColors,
  ...additionalColors,
  secondary: "#6D8442",
  background: "#0f190e",
  backgroundDisabled: "#3c3742",
  backgroundAlt: "#08060B",
  cardBorder: "#383241",
  contrast: "#FFFFFF",
  borderColor: "#524B63",
  dropdown: "#1E1D20",
  dropdownDeep: "#100C18",
  invertedContrast: "#191326",
  input: "#372F47",
  inputSecondary: "#262130",
  primaryDark: "#0098A1",
  tertiary: "#0f190e",
  text: "#8BB837",
  textDisabled: "#666171",
  textSubtle: "#8BB837",
  disabled: "#524B63",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #313D5C 0%, #3D2A54 100%)",
    inverseBubblegum: "linear-gradient(139.73deg, #3D2A54 0%, #313D5C 100%)",
    cardHeader: "linear-gradient(166.77deg, #3B4155 0%, #3A3045 100%)",
    blue: "linear-gradient(180deg, #00707F 0%, #19778C 100%)",
    violet: "linear-gradient(180deg, #6C4999 0%, #6D4DB2 100%)",
    violetAlt: "linear-gradient(180deg, #434575 0%, #66578D 100%)",
    gold: "linear-gradient(180deg, #FFD800 0%, #FDAB32 100%)",
  },
};
