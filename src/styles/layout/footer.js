export const footerStyles = (COLORS) => {return {
  container:{ backgroundColor:COLORS.background.secondary, height:80, flexDirection:"row", justifyContent:"space-evenly", alignItems:"center" },
  icon:{ marginBottom:3 },
  iconWrapper:{ flexDirection:"column", justifyContent:"center", alignItems:"center" },
  text:{  color:COLORS.details.primary, fontWeight:"500", fontSize:11, marginBottom:8 }
};
};