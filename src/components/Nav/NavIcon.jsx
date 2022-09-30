import Text from "components/utils/Text";

import AppContext from "context/AppContext";

import { useContext } from "react";
import { Pressable, View } from "react-native";
import { useNavigate } from "react-router-native";


const NavIcon = ({ text, navigate, selected, setSelected }) => {
  const { styles } = useContext(AppContext);
  let redirect = useNavigate();

  const DEFAULT_COLOR = styles.footer.text.color;
  const HIGHLIGHT_COLOR = styles.footer.text.highlight;

  const handlePress = () => {
    redirect(navigate);
    setSelected(text);
  };

  return (
    <Pressable onPress={handlePress}>
      <View style={styles.footer.iconWrapper}>
        <View style={styles.footer.icon}></View>
        <Text style={{ ...styles.footer.text, color:selected===text?HIGHLIGHT_COLOR:DEFAULT_COLOR }}>{text}</Text>
      </View>
    </Pressable>
  );
};

export default NavIcon;