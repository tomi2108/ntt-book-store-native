const NEUTRAL_COLORS = {
  white:"#ffffff",
  black:"#000000",
  grey:"#adadad",
  blue:"#3683ff",
  red:"#fe6a6a",
  green:"#63de3e",
  yellow:"#faaf00",
  highlight:"#3b9cf7"
};

const DARK_COLORS = {
  ...NEUTRAL_COLORS,

  background: {
    primary: "#212529",
    secondary: "#303134",
    contrast: "#dddddd"
  },

  text: {
    primary: "#ffffff",
    secondary: "#cacaca",
    placeHolder:"#cccccc"
  },

  details: {
    primary: "#747474",
    secondary: "#656565"
  },

  hover: {
    primary: "#dddddd"
  }
};

const LIGHT_COLORS = {
  ...NEUTRAL_COLORS,

  background: {
    primary: "#F8F9FA",
    secondary: "#dddddd",
    contrast:"#303134"
  },

  text: {
    primary: "#000000",
    secondary: "#050505",
    placeHolder:"#cccccc"
  },

  details: {
    primary: "#343434",
    secondary: "#252525"
  },

  hover: {
    primary: "#4b4b4b"
  }
};

let colorScheme = "DARK";

export const setColorScheme = (newTheme) => {
  colorScheme = newTheme;
  return colorScheme === "LIGHT" ? LIGHT_COLORS : DARK_COLORS;
};
