export const reviewStyles = (COLORS) => {return  {
  container:{ backgroundColor:COLORS.background.primary,width:"100%",minHeight:130,marginVertical:10,padding:10,borderTopWidth:1,borderBottomWidth:0,borderTopColor:COLORS.details.primary,borderBottomColor:COLORS.details.primary },
  title:{ flexDirection:"row" },
  username:{ fontSize:18,fontWeight:"500" },
  date:{ fontSize:18 },
  text:{ marginTop:10,marginBottom:20,fontSize:16 },
  rating:{ position:"absolute",bottom:10,right:10 },
  options:{ position:"absolute",top:10,right:10 },
  button:{ marginVertical:15 },
  modal:{
    container:{ height:"100%",justifyContent:"center", alignItems:"center",backgroundColor:COLORS.background.primary },
    rating:{ marginVertical:25 },
    buttonGroup:{ flexDirection:"row", width:"100%",justifyContent:"space-around",alignItems:"center" },
    button:{ fontSize:20 }
  }
};
};