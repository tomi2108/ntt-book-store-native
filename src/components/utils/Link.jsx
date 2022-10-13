import AppContext from "context/AppContext";
import { useContext } from "react";
import { Text, TouchableOpacity } from "react-native";

const Link = ({ onPress,title,style,error=false }) => {
  const { styles }=useContext(AppContext);


  return (
    <TouchableOpacity onPress={onPress}>
      <Text style={[styles.link,error&&{ color:styles.COLORS.red,borderBottomColor:styles.COLORS.red },style]}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Link;