import Constants from "expo-constants";

const NEUTRAL_COLORS = {
  white:"#ffffff",
  black:"#000000",
  blue:"#3683ff",
  red:"#fe6a6a"
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
    secondary: "#d1d1d1",
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

export const styledtheme = (theme) => {
  const COLORS = theme === "LIGHT" ? LIGHT_COLORS : DARK_COLORS;
  return {
    link:{ color:COLORS.blue, borderBottomWidth:1, borderBottomColor:COLORS.blue },
    contrast:COLORS.background.contrast,
    colorScheme:theme,
    textComponent:{ color:COLORS.text.primary },
    reset:{ fontFamily:"" },
    header:{
      container:{ height:130, backgroundColor:COLORS.background.secondary, paddingTop:Constants.statusBarHeight, paddingRight:15, paddingLeft:15 },
      searchBar:{ justifyContent:"center", alignItems:"center", placeHolderColor:COLORS.text.placeHolder, flexDirection:"row", height:40 },
      title:{  fontSize:22, fontWeight:"500" },
      input: { height: 40, width:"85%", marginRight:4, backgroundColor:COLORS.white, borderRadius:50, shadowColor:COLORS.details.primary, shadowOffset:{ width:2,height:2 }, shadowOpacity:0.5, shadowRadius:4, elevation:20, padding: 10 },
      cartIcon:{ backgroundColor:"blue", height:46, width:46 },
      userContainer:{ marginTop:20 }
    },
    main:{
      container:{ backgroundColor:COLORS.background.primary, height:1 }
    },
    footer:{
      container:{ backgroundColor:COLORS.background.secondary, height:80, flexDirection:"row", justifyContent:"space-evenly", alignItems:"center" },
      iconWrapper:{ flexDirection:"column", justifyContent:"center", alignItems:"center" },
      icon:{ height:30, width:30, marginBottom:3, backgroundColor:"blue" },
      text:{ highlight:"#3b9cf7", color:COLORS.details.primary, fontWeight:"500", fontSize:11, marginBottom:8 }
    },
    settings:{
      container:{ height:200 },
      profile:{ height:150, justifyContent:"flex-start", alignItems:"center", flexDirection:"row" },
      profilePicture:{ height:70,width:70, backgroundColor:"blue", marginHorizontal:20 },
      options:{ height:50,flexDirection:"row",justifyContent:"space-between",alignItems:"center" },
      description:{ marginLeft:20,flexDirection:"row",alignItems:"center",justifyContent:"center" },
      optionIcon:{ height:30,width:30, backgroundColor:"blue" },
      optionTitle:{ marginLeft:10 },
      optionButton:{ marginRight:20 }
    },
    displayIf : (condition) => {return { visibility:condition?"":"hidden" };}
  };
};