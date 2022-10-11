import Constants from "expo-constants";

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

export const styledtheme = (theme) => {
  const COLORS = theme === "LIGHT" ? LIGHT_COLORS : DARK_COLORS;
  return {
    COLORS,
    highlight:COLORS.highlight,
    icon:{ color:COLORS.text.primary },
    outOfStockText:{ color:COLORS.red ,fontWeight:"500" },
    priceText:{ color:COLORS.blue,fontWeight:"800" },
    backButton:{ alignSelf:"flex-start",position:"absolute",top:0,paddingVertical:10,paddingHorizontal:3 },
    notTheme:theme==="LIGHT"?"Dark":"Light",
    contrast:COLORS.background.contrast,
    link:{ color:COLORS.blue, borderBottomWidth:1, borderBottomColor:COLORS.blue },
    notification:{ color:COLORS.red,fontSize:14,fontWeight:"bold" },
    reset:{ fontFamily:"" },
    textComponent:{ color:COLORS.text.primary },
    header:{
      container:{ height:140, backgroundColor:COLORS.background.secondary, paddingTop:Constants.statusBarHeight + 10, paddingRight:15, paddingLeft:15 },
      input: { fontSize:12, height: 30, width:"85%", marginRight:4, backgroundColor:COLORS.white, borderRadius:50, shadowColor:COLORS.details.primary, shadowOffset:{ width:2,height:2 }, shadowOpacity:0.5, shadowRadius:4, elevation:20 , paddingHorizontal:10 },
      searchBar:{ justifyContent:"center", alignItems:"center", placeHolderColor:COLORS.text.placeHolder, flexDirection:"row", height:30 },
      title:{  fontSize:22, fontWeight:"500" },
      userContainer:{ marginTop:20 }
    },
    main:{
      container:{ backgroundColor:COLORS.background.primary,flex:1 }
    },
    footer:{
      container:{ backgroundColor:COLORS.background.secondary, height:80, flexDirection:"row", justifyContent:"space-evenly", alignItems:"center" },
      icon:{ marginBottom:3 },
      iconWrapper:{ flexDirection:"column", justifyContent:"center", alignItems:"center" },
      text:{  color:COLORS.details.primary, fontWeight:"500", fontSize:11, marginBottom:8 }
    },
    settings:{
      description:{ marginLeft:20,flexDirection:"row",alignItems:"center",justifyContent:"center" },
      list:{ alignItems:"center",justifyContent:"flex-start" },
      login:{ fontSize:25 },
      optionButton:{ marginRight:20 },
      options:{ width:"100%", height:50,flexDirection:"row",justifyContent:"space-between",alignItems:"center" },
      optionTitle:{ marginLeft:10,fontSize:16 },
      profile:{ height:150, justifyContent:"flex-start", alignItems:"center", flexDirection:"row" },
      profilePicture:{ marginHorizontal:20 },
      userDetails:{ marginTop:10 },
      username:{ fontSize:30,fontWeight:"500" }
    },
    form:{
      button:{ fontSize:20, marginTop:12 },
      container: { height:"100%", width:"100%", backgroundColor:COLORS.background.primary,justifyContent:"center",alignItems:"center" },
      datePicker:{ marginVertical:30,alignItems:"center",justifyContent:"space-evenly",flexDirection:"row", width:"100%" },
      footer:{
        link:{ marginTop:5 },
        text:{ marginTop:30 }
      },
      text:{ marginTop:10,placeHolderColor:COLORS.text.placeHolder, height: 40, width:"85%", marginRight:4, backgroundColor:COLORS.background.primary, color:COLORS.text.primary, padding: 10, borderWidth:0,borderBottomWidth:1,borderColor:COLORS.highlight  }
    },
    home:{
      title:{ fontSize:35,fontWeight:"800",marginBottom:15 }
    },
    bookCard:{
      button:{ alignSelf:"flex-end",position:"absolute",right:10,bottom:10 },
      container:{ marginHorizontal:10,borderRadius:10,flexDirection:"row", width:260 ,height:160,backgroundColor:COLORS.background.secondary,padding:20 },
      details:{ width:"70%", marginLeft:10,height:140 },
      image:{ width:75,height:120,borderRadius:7 },
      stock:{ position:"absolute",left:0,bottom:40  },
      price:{ position:"absolute",bottom:15, fontSize:18 },
      title:{ fontSize:18 , fontWeight:"600" }
    },
    transactionButton:{
      base:{ backgroundColor:COLORS.blue, width:30, height:30, justifyContent:"center", alignItems:"center", borderRadius:5 },
      complete:{ backgroundColor:COLORS.green },
      disabled:{ backgroundColor:COLORS.grey },
      error:{ backgroundColor:COLORS.red }
    },
    bookDetails:{
      container:{ justifyContent:"flex-start",alignItems:"center", padding:25  },
      image:{ width:280, height:420,borderRadius:7 } ,
      title:{ alignSelf:"flex-start", fontSize:25,fontWeight:"500", marginVertical:40 } ,
      author: { alignSelf:"flex-start", fontSize:20,fontWeight:"400", marginBottom:25,marginTop:15,color:COLORS.text.secondary },
      stock: { alignSelf:"flex-end", fontSize:14  },
      description:{ alignSelf:"flex-start", fontSize:15 },
      price:{ alignSelf:"flex-end",fontSize:40,marginTop:15 },
      addButton:{ alignSelf:"flex-end",height:60,width:150 },
      likeButton:{ borderWidth:0.5,borderRadius:5,borderColor:COLORS.details.primary,padding:10 },
      buttonContainer:{ width:"100%", flexDirection:"row",alignItems:"center", justifyContent:"space-between" }
    },
    review:{
      container:{ backgroundColor:COLORS.background.primary,width:"100%",minHeight:130,marginVertical:10,padding:10,borderTopWidth:1,borderBottomWidth:0,borderTopColor:COLORS.details.primary,borderBottomColor:COLORS.details.primary },
      username:{ fontSize:18,fontWeight:"500" },
      text:{ marginTop:10,marginBottom:20,fontSize:16 },
      rating:{ position:"absolute",bottom:10,right:10 },
      options:{ position:"absolute",top:10,right:10 }
    },
    displayIf : (condition) => {return { display:condition?"":"none" };}
  };
};
