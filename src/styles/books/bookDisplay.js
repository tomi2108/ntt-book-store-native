export const bookDisplayStyles = (COLORS) => {return {
  container:{ borderBottomWidth:1,borderBottomColor:COLORS.details.primary,flexDirection:"row", width:"100%" ,height:200,backgroundColor:COLORS.background.primary,padding:20 },
  author:{ fontSize:16,fontWeight:"400",color:COLORS.text.secondary,marginTop:5 },
  details:{ width:"70%", marginLeft:20,height:160 },
  image:{ width:100,height:160,borderRadius:7 },
  stock:{ position:"absolute",right:20,bottom:40  },
  price:{ position:"absolute",bottom:0,right:20, fontSize:30 },
  title:{ fontSize:20 , fontWeight:"600" },
  likeButton:{ justifyContent:"center",alignItems:"center", borderWidth:0.5,borderRadius:5,borderColor:COLORS.details.primary,padding:20,width:50,height:50,position:"absolute",bottom:5 }
};
};