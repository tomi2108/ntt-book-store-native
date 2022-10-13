import AppContext from "context/AppContext";
import { useContext } from "react";
import { Text, TouchableOpacity } from "react-native";


const Button = ({ title,onPress }) => {
  const { styles } = useContext(AppContext);
  return (
    <TouchableOpacity style={[styles.transactionButton.base,{ width:100,height:50 }]} onPress={onPress}>
      <Text style={{ color:"#fff" }}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;