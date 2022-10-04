import Constants from "expo-constants";

const NEUTRAL_COLORS = {
  white:"#ffffff",
  black:"#000000",
  grey:"#adadad",
  blue:"#3683ff",
  red:"#fe6a6a",
  green:"#63de3e"
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
    backButton:{ alignSelf:"flex-start",position:"absolute",top:0 },
    reset:{ fontFamily:"" },
    notification:{ color:COLORS.red,fontSize:14,fontWeight:"bold" },
    header:{
      container:{ height:130, backgroundColor:COLORS.background.secondary, paddingTop:Constants.statusBarHeight, paddingRight:15, paddingLeft:15 },
      searchBar:{ justifyContent:"center", alignItems:"center", placeHolderColor:COLORS.text.placeHolder, flexDirection:"row", height:40 },
      title:{  fontSize:22, fontWeight:"500" },
      input: { height: 40, width:"85%", marginRight:4, backgroundColor:COLORS.white, borderRadius:50, shadowColor:COLORS.details.primary, shadowOffset:{ width:2,height:2 }, shadowOpacity:0.5, shadowRadius:4, elevation:20, padding: 10 },
      cartIcon:{ backgroundColor:COLORS.blue, height:46, width:46 },
      userContainer:{ marginTop:20 }
    },
    main:{
      container:{ backgroundColor:COLORS.background.primary, height:1 }
    },
    footer:{
      container:{ backgroundColor:COLORS.background.secondary, height:80, flexDirection:"row", justifyContent:"space-evenly", alignItems:"center" },
      iconWrapper:{ flexDirection:"column", justifyContent:"center", alignItems:"center" },
      icon:{ height:30, width:30, marginBottom:3, backgroundColor:COLORS.blue },
      text:{ highlight:"#3b9cf7", color:COLORS.details.primary, fontWeight:"500", fontSize:11, marginBottom:8 }
    },
    settings:{
      container:{ height:500 },
      profile:{ height:150, justifyContent:"flex-start", alignItems:"center", flexDirection:"row" },
      profilePicture:{ height:70,width:70, backgroundColor:COLORS.blue, marginHorizontal:20 },
      list:{ height:300,alignItems:"center",justifyContent:"flex-start",flexDirection:"column" },
      options:{ width:"100%", height:50,flexDirection:"row",justifyContent:"space-between",alignItems:"center" },
      description:{ marginLeft:20,flexDirection:"row",alignItems:"center",justifyContent:"center" },
      optionIcon:{ height:30,width:30, backgroundColor:COLORS.blue },
      optionTitle:{ marginLeft:10 },
      optionButton:{ marginRight:20 }
    },
    form:{
      container: { height:"100%", width:"100%", backgroundColor:COLORS.background.primary,justifyContent:"center",alignItems:"center" },
      text:{ marginTop:10,placeHolderColor:COLORS.text.placeHolder, height: 40, width:"85%", marginRight:4, backgroundColor:COLORS.white, shadowColor:COLORS.details.primary, shadowOffset:{ width:2,height:2 } ,shadowOpacity:0.5, shadowRadius:4, elevation:20, padding: 10 },
      button:{ fontSize:20, marginTop:12 },
      datePicker:{ marginVertical:30,alignItems:"center",justifyContent:"space-evenly",flexDirection:"row", width:"100%" },
      footer:{
        text:{ marginTop:30 },
        link:{ marginTop:5 }
      }
    },
    home:{
      title:{ fontSize:35,fontWeight:"800",marginBottom:15 }
    },
    bookCard:{
      container:{ marginHorizontal:10,borderRadius:10,flexDirection:"row", width:260 ,height:160,backgroundColor:COLORS.background.secondary,padding:20 },
      image:{ width:75,height:120,borderRadius:7 },
      details:{ width:"70%", marginLeft:10,height:140 },
      title:{ fontSize:18 , fontWeight:"600" },
      stock:{ position:"absolute",left:0,bottom:40 },
      price:{ position:"absolute",bottom:15, fontSize:18, color:COLORS.blue,fontWeight:"800" },
      button:{ alignSelf:"flex-end",position:"absolute",right:10,bottom:10 },
      buttonText:{ color:COLORS.white,fontSize:20 },
      outOfStockText:{ position:"absolute",left:0,bottom:40 , color:COLORS.red ,fontWeight:"500" }
    },
    transactionButton:{
      base:{ backgroundColor:COLORS.blue, width:30, height:30, justifyContent:"center", alignItems:"center", borderRadius:5 },
      disabled:{ backgroundColor:COLORS.grey },
      error:{ backgroundColor:COLORS.red },
      complete:{ backgroundColor:COLORS.green }
    },
    displayIf : (condition) => {return { visibility:condition?"":"hidden" };}
  };
};
