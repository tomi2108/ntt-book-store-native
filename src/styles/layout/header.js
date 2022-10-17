import Constants from "expo-constants";

export const headerStyles = (COLORS) => {return {
  container:{ height:140, backgroundColor:COLORS.background.secondary, paddingTop:Constants.statusBarHeight + 10, paddingRight:15, paddingLeft:15 },
  input: { alignSelf:"flex-start",fontSize:12, height: 30, marginRight:4, backgroundColor:COLORS.white, borderRadius:50, shadowColor:COLORS.details.primary, shadowOffset:{ width:2,height:2 }, shadowOpacity:0.5, shadowRadius:4, elevation:20 , paddingHorizontal:10 },
  searchBar:{ justifyContent:"center", alignItems:"center", placeHolderColor:COLORS.text.placeHolder, flexDirection:"row", height:30 },
  title:{ fontSize:22, fontWeight:"500" },
  userContainer:{ marginTop:20 },
  cart:{ position:"absolute", right:10 }
};
};