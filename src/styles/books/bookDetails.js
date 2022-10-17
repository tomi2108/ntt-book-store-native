export const bookDetailsStyles = (COLORS) => {return {
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
};
};