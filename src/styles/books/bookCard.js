export const bookCardStyles = (COLORS) => {return {
  button:{ alignSelf:"flex-end",position:"absolute",right:10,bottom:10 },
  container:{ marginHorizontal:10,borderRadius:10,flexDirection:"row", width:260 ,height:160,backgroundColor:COLORS.background.secondary,padding:20 },
  details:{ width:"70%", marginLeft:10,height:140 },
  image:{ width:75,height:120,borderRadius:7 },
  stock:{ position:"absolute",left:0,bottom:40  },
  price:{ position:"absolute",bottom:15, fontSize:18 },
  title:{ fontSize:18 , fontWeight:"600" }
};
};