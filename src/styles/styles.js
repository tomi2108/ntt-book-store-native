import { bookCardStyles } from "styles/books/bookCard";
import { bookDetailsStyles } from "styles/books/bookDetails";
import { bookDisplayStyles } from "styles/books/bookDisplay";
import { setColorScheme } from "styles/colors";
import { formStyles } from "styles/elements/form";
import { reviewStyles } from "styles/elements/review";
import { footerStyles } from "styles/layout/footer";
import { headerStyles } from "styles/layout/header";
import { settingsStyles } from "styles/layout/settings";

export const styledtheme = (theme) => {
  const COLORS =  setColorScheme(theme);

  const header = headerStyles(COLORS);
  const footer = footerStyles(COLORS);
  const form = formStyles(COLORS);
  const bookDisplay = bookDisplayStyles(COLORS);
  const review = reviewStyles(COLORS);
  const bookCard = bookCardStyles(COLORS);
  const bookDetails = bookDetailsStyles(COLORS);
  const settings = settingsStyles();

  return {
    COLORS,
    backButton:{ alignSelf:"flex-start",position:"absolute",top:0,paddingVertical:10,paddingHorizontal:3 },
    contrast:COLORS.background.contrast,
    link:{ color:COLORS.blue, borderBottomWidth:1, borderBottomColor:COLORS.blue },
    notification:{ color:COLORS.red,fontSize:14,fontWeight:"bold" },
    notificationModal:{ position:"absolute",bottom:0,width:"100%", height:100, justifyContent:"center",alignItems:"center" },
    notTheme:theme==="LIGHT"?"Dark":"Light",
    outOfStockText:{ color:COLORS.red ,fontWeight:"500" },
    priceText:{ color:COLORS.blue,fontWeight:"800" },
    reset:{ fontFamily:"" },
    textComponent:{ color:COLORS.text.primary },
    cart:{
      container:{ backgroundColor:COLORS.background.primary },
      empty:{ fontSize:30,alignSelf:"center",paddingTop:20 }
    },
    checkOut:{
      container:{ height:90,width:"100%",backgroundColor:COLORS.background.secondary,alignItems:"center",justifyContent:"space-between",flexDirection:"row",paddingHorizontal:25 },
      link:{ fontSize:20 }
    },
    home:{
      title:{ fontSize:35,fontWeight:"800",marginVertical:20 },
      container:{ paddingHorizontal:20,justifyContent:"center",minHeight:"100%" }
    },
    login:{
      container:{ justifyContent:"center",alignItems:"center" }
    },
    main:{
      container:{ backgroundColor:COLORS.background.primary,flex:1 }
    },
    transactionButton:{
      base:{ backgroundColor:COLORS.blue, width:30, height:30, justifyContent:"center", alignItems:"center", borderRadius:5 },
      complete:{ backgroundColor:COLORS.green },
      disabled:{ backgroundColor:COLORS.grey },
      error:{ backgroundColor:COLORS.red }
    },
    bookCard,
    bookDetails,
    bookDisplay,
    footer,
    form,
    header,
    review,
    settings,
    displayIf : (condition) => {return { display:condition?"":"none" };}
  };
};
