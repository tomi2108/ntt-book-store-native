import AppContext from "context/AppContext";
import { useContext } from "react";
import { Pressable, Text } from "react-native";

const Link = ({ onPress,title }) => {
  const { styles }=useContext(AppContext);


  return (
    <Pressable onPress={onPress}>
      <Text style={styles.link}>{title}</Text>
    </Pressable>
  );
};

export default Link;