export const formStyles = (COLORS) => {return {
  button:{ fontSize:20, marginTop:20  },
  container: { height:"100%", width:"100%", backgroundColor:COLORS.background.primary,justifyContent:"center",alignItems:"center" },
  datePicker:{ marginVertical:30,alignItems:"center",justifyContent:"space-evenly",flexDirection:"row", width:"100%" },
  footer:{
    link:{ marginTop:5 },
    text:{ marginTop:30 }
  },
  text:{ marginTop:10,placeHolderColor:COLORS.text.placeHolder, height: 40, width:"85%", marginRight:4, backgroundColor:COLORS.background.primary, color:COLORS.text.primary, padding: 10, borderWidth:0,borderBottomWidth:1,borderColor:COLORS.highlight  }
};
};